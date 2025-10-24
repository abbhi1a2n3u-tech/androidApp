import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas URI
const uri = process.env.MONGO_DB_URI; // mongodb+srv://username:password@cluster0.mongodb.net/AndroidApp?retryWrites=true&w=majority
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let usersCollection;

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("AndroidApp"); // Database name
    usersCollection = db.collection("users"); // Collection name
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
}

// Connect to DB before starting server
await connectDB();

// GET / - insert a test user and fetch
app.get("/", async (req, res) => {
  try {
    const data = {
      name: "Abhianshu",
      email: "shivam@gmail.com",
      password: "213",
      createdAt: new Date(),
    };

    // Insert user
    const result = await usersCollection.insertOne(data);
    console.log("User inserted with ID:", result.insertedId);

    // Fetch inserted user
    const user = await usersCollection.findOne({ email: "shivam@gmail.com" });

    res.json({ message: "User saved", user });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST /api - insert user from request body
app.post("/api", async (req, res) => {
  try {
    const userData = { ...req.body, createdAt: new Date() };
    const result = await usersCollection.insertOne(userData);

    console.log("User inserted:", result.insertedId);
    res.json({ message: "User saved successfully", userId: result.insertedId });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST /data - just echo request
app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data received successfully", data: req.body });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
