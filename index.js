// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./Routes/router.js";
import { User } from "./model/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Temporary test user (for seeding)
const testUser = {
  name: "Abhi Yadav",
  email: "Ankush@gmail.com",
  password: "shivam12345",
};

// ✅ Create a new user if not exists
app.get("/api/users", async (req, res) => {
  try {
    console.log("📩 /api/users route accessed");
    const existingUser = await User.findOne({ email: testUser.email });

    if (!existingUser) {
      const createdUser = new User(testUser);
      await createdUser.save();
      return res.json({ message: "User created", user: createdUser });
    }

    res.json({ message: "User already exists", user: existingUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Example route for finding user by email
app.post("/api/find", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("🔍 Searching for user:", email);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Register all other routes
app.use("/api", router);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
