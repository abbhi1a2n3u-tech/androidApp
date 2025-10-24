import pkg from "pg";

const { Pool } = pkg;

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    console.log(name, email, password);

    try {
        
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};