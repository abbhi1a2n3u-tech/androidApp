import mongoose from "mongoose";
import connectDB from "./db.js";

const conn = await connectDB();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = conn.model("User", userSchema, "users"); // use connection object

export default User;
