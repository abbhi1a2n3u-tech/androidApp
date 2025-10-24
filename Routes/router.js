import e from "express";
import { register } from "../APIs/keyAuth.js";

const router = e.Router();

router.post("/register", register);

export { router };