import { User } from "../model/user.js"



export const saveUserProfile =  async (req, res) => {
  
    // Dummy user profile data
    // some data from database can be fetched here
    const user = new User({
        username: "Shivam Yadav",
        email: "shivamyadav142312@gmail.com",
        password: "shivam12345",
        Money: 1000,
        playerID: 7835193377,
    });

    const savedUser = await user.save();

    res.json(savedUser);

}

export const getUserByid = async (req, res) => {
    const userId = req.body;

    // console.log("User ID received:", userId);

}

export const getUser = async (req, res) => {

    a = {
        email: req.body.email
    }
    console.log(" as "+  req.body);
    
    const users = await User.findOne(a);


    if (users.length === 0) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(users);
}