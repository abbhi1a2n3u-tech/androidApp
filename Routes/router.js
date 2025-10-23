import e from "express";

const router = e.Router();


// user router
router.get("/login", (req, res) => {
  res.send("Login route");
});


export { router };// Add more routes as needed