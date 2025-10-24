import e from "express ";
import cors from "cors";
import bodyParser from "body-parser";


const app = e();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});