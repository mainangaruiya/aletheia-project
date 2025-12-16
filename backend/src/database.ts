import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aletheia-project';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected');
    
    // Create default admin user if it doesn't exist
    await createDefaultAdmin();
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

const createDefaultAdmin = async (): Promise<void> => {
  try {
    const adminEmail = 'admin@aletheia.com';
    const adminPassword = 'Admin123!';
    
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      const adminUser = new User({
        email: adminEmail,
        password: adminPassword,
        role: 'admin'
      });
      
      await adminUser.save();
      console.log('✅ Default admin user created');
      console.log('📧 Email:', adminEmail);
      console.log('🔑 Password:', adminPassword);
    } else {
      console.log('✅ Admin user already exists');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};
