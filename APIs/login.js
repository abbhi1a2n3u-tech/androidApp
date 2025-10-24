


export const Login = async (req, res) => {
    try {
        const body_Data = req.body;
        console.log("Login request body:", body_Data);
        res.json({ message: "Login successful", data: body_Data });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
