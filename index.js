// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./Routes/router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const user = {
  name: "Shivam Yadav",
  email: "shivamyadav142312@gmail.com",
  password: "shivam12345",
}

// Import routes
app.use("/", (req, res) => {
  res.json(user);
});
app.use("/api", router);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port " + (process.env.PORT || 5000));
});
