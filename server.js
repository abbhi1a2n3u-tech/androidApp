import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sql } from "./model/db.js";
import { router } from "./Routes/router.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

const ap = async () => {    
    // create a table 
    await sql`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT now()
        );
    `;
    const {name, email, password} = {name: "Shivam Yadav", email: "shivamyadav142311@gmail.com", password: "password123"};
    const insert_query = await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${password})
            RETURNING *;
        `;
    console.log(insert_query);
}

ap().catch(err => {
    console.error("Database initialization failed:", err);
    process.exit(1);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});