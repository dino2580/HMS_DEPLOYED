bcrypt =require("bcrypt") ;

const User = require('../models/usermodel.js');
const generateWebToken = require("../utils/generateToken.js");
const { sendSignupEmailNotification } = require("./Nodemailer.js");

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  }
function emailVerification(){
    
}
const signUp = async (req, res) => {
    console.log("Inside Signup");
    try {
        const { full_name, email, password} = req.body;
        let roll_no=email;
        roll_no=roll_no.split("@")[0]
        const date_of_joining = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        console.log(roll_no);
        console.log(email);
        console.log(roll_no);
        const existingUser = await User.findOne({ roll_no });
        const existingEmail = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ err: "Roll number already exists" });
        }
        if (existingEmail) {
            return res.status(409).json({ err: "Email already exists" });
        }
        //verify whether email exist by otp generation
        emailVerification(email);
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const profilePic =`https://avatar.iran.liara.run/public/boy?username=${roll_no}`;

        const newUser = new User({
            full_name,
            roll_no,
            email,
            password: hashedPassword,
            date_of_joining,
            profile_pic: profilePic
        });
         
        const user=await newUser.save();
        if(user){
            sendSignupEmailNotification(user.full_name,user.email);
        }
        // console.log(user)
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
        const super_admin=user.super_admin;
        // console.log(user.hostel_no);

    
        if (!user) {
            return res.status(404).json({ err: "User does not exist" });
        }
    
        const hashedPassword=await bcrypt.compare(password,user.password);
        if (!hashedPassword) {
            return res.status(401).json({ err: "Password is Incorrect" });
        }
        console.log("super_admin"+super_admin);
        if(user.super_admin) generateWebToken({email,super_admin:true,admin:true,hostel_no,userId,full_name},res);
        else if(user.admin) generateWebToken({email,super_admin:false,admin:true,hostel_no,userId,full_name},res)
        else generateWebToken({email,admin:false,super_admin:false,hostel_no,userId,full_name},res);
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
