import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let conn = null;

const connectDB = async (retries = 5) => {
  if (conn) return conn;

  try {
    conn = await mongoose.createConnection(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      // ⏱️ Timeout settings (in ms)
      connectTimeoutMS: 60000,          // ✅ capital T, MS suffix
      socketTimeoutMS: 60000,           // ✅ correct
      serverSelectionTimeoutMS: 60000,  // ✅ correct

    }).asPromise();

    console.log('✅ MongoDB (createConnection) connected successfully');
    return conn;

  } catch (err) {
    console.error(`❌ Connection failed: ${err.message}`);

    if (retries > 0) {
      console.log(`🔁 Retrying in 5s... (${retries - 1} left)`);
      await new Promise(res => setTimeout(res, 5000));
      return connectDB(retries - 1);
    } else {
      process.exit(1);
    }
  }
};


export default connectDB;
