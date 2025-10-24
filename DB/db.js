import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_DB_URI;
console.log(MONGO_URL);

const connectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

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