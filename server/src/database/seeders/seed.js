const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/env');

// Import models
const User = require('../../models/User.model');
const Home = require('../../models/Home.model');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await User.deleteMany({});
    await Home.deleteMany({});
    console.log('Cleared existing data');

    // Create homes
    const homes = [
      {
        name: 'Nairobi Children\'s Home',
        type: 'orphanage',
        address: 'Nairobi, Kenya',
        capacity: 100,
        contactPhone: '+254712345678'
      },
      {
        name: 'Hope Haven for Teen Mothers',
        type: 'teen_mothers',
        address: 'Mombasa Road, Nairobi',
        capacity: 50,
        contactPhone: '+254723456789'
      }
    ];

    const createdHomes = await Home.insertMany(homes);
    console.log(`Created ${createdHomes.length} homes`);

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      email: 'admin@aletheia.org',
      password: adminPassword,
      role: 'admin',
      profile: {
        name: 'System Administrator',
        phone: '+254700000000'
      }
    });
    await adminUser.save();

    // Create supervisor
    const supervisorPassword = await bcrypt.hash('super123', 10);
    const supervisorUser = new User({
      email: 'supervisor@aletheia.org',
      password: supervisorPassword,
      role: 'supervisor',
      profile: {
        name: 'Dr. Jane Mwangi',
        phone: '+254711223344',
        bio: 'Licensed Clinical Psychologist with 10+ years experience'
      },
      homeId: createdHomes[0]._id
    });
    await supervisorUser.save();

    // Create guide
    const guidePassword = await bcrypt.hash('guide123', 10);
    const guideUser = new User({
      email: 'guide@aletheia.org',
      password: guidePassword,
      role: 'guide',
      profile: {
        name: 'John Kamau',
        phone: '+254722334455',
        bio: 'Former resident, now helping others find hope'
      },
      homeId: createdHomes[0]._id
    });
    await guideUser.save();

    // Create youth user
    const youthPassword = await bcrypt.hash('youth123', 10);
    const youthUser = new User({
      email: 'youth@aletheia.org',
      password: youthPassword,
      role: 'youth',
      profile: {
        name: 'Sarah Achieng',
        phone: '+254733445566',
        dateOfBirth: new Date('2008-05-15'),
        gender: 'female'
      },
      homeId: createdHomes[0]._id
    });
    await youthUser.save();

    console.log('Database seeded successfully!');
    console.log('\n=== Test Accounts ===');
    console.log('Admin: admin@aletheia.org / admin123');
    console.log('Supervisor: supervisor@aletheia.org / super123');
    console.log('Guide: guide@aletheia.org / guide123');
    console.log('Youth: youth@aletheia.org / youth123');

    mongoose.disconnect();
    process.exit(0);

  } catch (error) {
    console.error('Seeding error:', error);
    mongoose.disconnect();
    process.exit(1);
  }
};

seedDatabase();