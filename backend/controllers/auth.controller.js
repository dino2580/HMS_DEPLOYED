bcrypt =require("bcrypt") ;

const User = require('../models/usermodel.js');
const generateWebToken = require("../utils/generateToken.js");


const signUp = async (req, res) => {
    console.log("Inside Signup");
    try {
        const { full_name, roll_no, email, password, confirm_password, gender, date_of_joining } = req.body;
        console.log(password);
        console.log(confirm_password);
        if (password !== confirm_password) {
            return res.status(400).json({ err: "Passwords don't match" });
        }
        if (password.length < 8) {
            return res.status(403).json({ err: "Password length must be greater than 8" });
        }
        const existingUser = await User.findOne({ roll_no });
        const existingEmail = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ err: "Roll number already exists" });
        }
        if (existingEmail) {
            return res.status(401).json({ err: "Email already exists" });
        }
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const profilePic = gender === "M" ? `https://avatar.iran.liara.run/public/boy?username=${roll_no}` : `https://avatar.iran.liara.run/public/girl?username=${roll_no}`;

        const newUser = new User({
            full_name,
            roll_no,
            email,
            password: hashedPassword,
            gender,
            date_of_joining,
            profile_pic: profilePic
        });
         
        await newUser.save();
        
        return res.status(201).json({
            _id: newUser._id
        });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ err: "Signup error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

      
        const user = await User.findOne({ email });
        const hostel_no=user.hostel_no;
        const userId=user._id;
        const full_name=user.full_name;
        // console.log(user.hostel_no);

    
        if (!user) {
            return res.status(404).json({ err: "User does not exist" });
        }
    
        const hashedPassword=await bcrypt.compare(password,user.password);
        if (!hashedPassword) {
            return res.status(401).json({ err: "Password is Incorrect" });
        }
        if(user.admin) generateWebToken({email,admin:true,hostel_no,userId,full_name},res);
        else generateWebToken({email,admin:false,hostel_no,userId,full_name},res);
        return res.status(201).json("Successful login");
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({ err: "Error in Login" });
    }   
};
const logout = async (req, res) => {
    try {
        console.log("logout")
        // Clear the JWT cookie
        res.clearCookie('jwt');

        // Optionally, destroy the session if you're using sessions
        // req.session.destroy();

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {signUp,login,logout};
