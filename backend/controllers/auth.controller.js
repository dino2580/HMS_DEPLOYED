const User = require('../models/usermodel.js');

const signUp = async (req, res) => {
    console.log("Inside Signup");
    try {
        const { fullName, rollNumber, email, password, confirmPassword, gender, dateOfJoining } = req.body;
        if (password != confirmPassword) {
            return res.status(400).json({ err: "Passwords don't match" });
        }
        const user = await User.findOne({ rollNumber });
        if (user) {
            return res.status(400).json({ err: "Roll number already exists" });
        }
        const newUser = new User({
            fullName,
            rollNumber,
            email,
            password,
            gender,
            dateOfJoining
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
