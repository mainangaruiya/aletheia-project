import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './database';
import contactRoutes from './routes/contactRoutes';
import authRoutes from './routes/authRoutes';
import User from './models/User';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Aletheia Backend',
    version: '1.0.0',
    database: 'MongoDB',
    environment: process.env.NODE_ENV
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Create default admin on startup
const createDefaultAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@aletheia.com' });
    
    if (!adminExists) {
      const adminUser = new User({
        email: 'admin@aletheia.com',
        password: 'Admin123!',
        role: 'admin'
      });
      
      await adminUser.save();
      console.log('✅ Default admin user created');
      console.log('📧 Email: admin@aletheia.com');
      console.log('🔑 Password: Admin123!');
    } else {
      console.log('✅ Admin user already exists');
    }
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  }
};

// Start server
const startServer = async () => {
  try {
    await connectDB();
    await createDefaultAdmin();
    
    app.listen(PORT, () => {
      console.log(`\n🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log(`📨 Contact endpoint: POST http://localhost:${PORT}/api/contacts`);
      console.log(`🔐 Auth endpoint: POST http://localhost:${PORT}/api/auth/login`);
      console.log(`👨‍💼 Admin dashboard: http://localhost:3000/admin`);
      console.log(`⚡ Mode: ${process.env.NODE_ENV}`);
      console.log(`⏰ Started at: ${new Date().toLocaleString()}\n`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;