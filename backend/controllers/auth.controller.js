bcrypt =require("bcrypt") ;
const check = require("../db/reterieveData.js");
const User = require('../models/usermodel.js');
const generateWebToken = require("../utils/generateToken.js");

const signUp = async (req, res) => {
    console.log("Inside Signup");
    try {
        const { fullName, rollNumber, email, password, confirmPassword, gender, dateOfJoining } = req.body;
        if (password != confirmPassword) {
            return res.status(400).json({ err: "Passwords don't match" });
        }
        if(password.length<8) 
        {
            return res.status(403).json({err:"Password length must be greater than 8"})
        }
        const user = await User.findOne({ rollNumber });
        const userEmail =await User.findOne({email});
        if (user) {
            return res.status(400).json({ err: "Roll number already exists" });
        }
        if(userEmail)
        {
            return res.status(401).json({err:"Email already exists"});
        }
        const salt =await bcrypt.genSalt(5);
        const hashedPassword=await bcrypt.hash(password,salt);
        
        
        const girlPic=`https://avatar.iran.liara.run/public/girl?username=${rollNumber}`;
        const boyPic=`https://avatar.iran.liara.run/public/boy?username=${rollNumber}`;
        const newUser = new User({
            fullName,
            rollNumber,
            email,
            password:hashedPassword,
            gender,
            dateOfJoining,
            profilePic:gender==="M" ? boyPic:girlPic
        });
        await generateWebToken(user);
        await newUser.save();
        check(fullName);
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

    
        if (!user) {
            return res.status(404).json({ err: "User does not exist" });
        }

        
        if (user.password !== password) {
            return res.status(401).json({ err: "Password is Incorrect" });
        }

        
        return res.status(201).json("Successful login");
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({ err: "Error in Login" });
    }
};

module.exports = {signUp,login};
