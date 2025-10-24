import { sql } from "../model/db.js";


export const register = async (req, res) => {
    const {name, email, password} = req.body;

    console.log(name, email, password);

    try {
        const existing_User_query = await sql(`SELECT * FROM users WHERE email = ${email}`);
        if (existing_User_query.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        const insert_query = await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${password})
            RETURNING *;
        `;

        res.status(201).json({ message: "User registered successfully", user: insert_query[0] });
        
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};