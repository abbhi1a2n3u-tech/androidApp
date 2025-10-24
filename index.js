import e from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./DB/db.js";
import User from "./DB/UserSchema.js";
connectDB();

const app = e();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

app.post("/data", async (req, res) => {
    const requestData = req.body;
    console.log("Received data:", requestData);
    res.json({ message: "Data received successfully", data: requestData });
});

app.post("/api", async (req, res) => {
    const requestData = req.body;
    console.log("API Received data:", requestData);

    try {
        const user = await User.insertOne({requestData});

        res.json({ message: "User saved successfully", user });
    }
    catch(err){
        console.error("Error saving user:", err);
    }

});

console.log("Starting server...");




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});