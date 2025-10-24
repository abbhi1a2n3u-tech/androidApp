import e from "express";
import cros from "cors";
import doten from "dotenv";
import pkg from "pg";
import { sql } from "./model/db.js";
import { router } from "./Routes/router.js";

doten.config();
const { Pool } = pkg;
const app = e();
app.use(e.json());
app.use(cros());

sql;

app.use("/api/register", router);

console.log("🚀 Server is running on port");