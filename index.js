// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./Routes/router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Import routes
app.use("/api", router);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port " + (process.env.PORT || 5000));
});
