// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router, userRouter } from "./Routes/router.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error: ", err));

const user = {
  name: "Shivam Yadav",
  email: "shivamyadav142312@gmail.com",
  password: "shivam12345",
}

// Import routes
app.use("/api/users", async (req, res) => {
  res.json(user);
});
app.use("/api", router);
app.use("/api", userRouter);


app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port " + (process.env.PORT || 5000));
});
