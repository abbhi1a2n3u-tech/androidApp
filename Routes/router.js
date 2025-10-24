import e from "express";
import { getUserByid, saveUserProfile } from "../APIs/profileApi.js";
import { Login } from "../APIs/login.js";

const router = e.Router();
const userRouter = e.Router();


// user router
router.get("/login", Login);
router.get("/user/profile", saveUserProfile);


userRouter.post("/getById", getUserByid);

export { router, userRouter };// Add more routes as needed