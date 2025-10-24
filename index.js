import e from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./DB/db.js";
connectDB();

const app = e();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});


console.log("Starting server...");




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});