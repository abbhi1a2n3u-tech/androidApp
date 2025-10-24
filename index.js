import e from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sql from "./DB/db.js";


const app = e();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());




app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

const users = await sql`SELECT * FROM users;`;

console.log(users);




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});