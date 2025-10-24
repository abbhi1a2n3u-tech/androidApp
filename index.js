// index.js
import express from "express";
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { User } from "./model/user.js";

import "./server.js";

dotenv.config();

const app = express();

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
