import e from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sql from "./DB/db.js";


const app = e();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());


const users = await sql`SELECT * FROM users;`;


app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

app.get("/api/users", async (req, res) => {

    const user = req.body;

    console.log(user);

    res.json(users);
})


console.log(users);




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});