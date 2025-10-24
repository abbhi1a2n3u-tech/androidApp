import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_DB_URI || process.env.MONGO_URI;
console.log(MONGO_URI);

const connectDB = async () => {
   try {
    if (!MONGO_URI) {
      throw new Error('MONGO_DB_URI or MONGO_URI environment variable is not set');
    }
    await mongoose.connect(MONGO_URI, {
      // 🔥 Timeouts (in milliseconds)
      connectTimeoutMS: 300000, // 300 seconds (default is 10s)
      socketTimeoutMS: 450000,  // 450 seconds (default is 30s)
      serverSelectionTimeoutMS: 300000 // 300 seconds
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
