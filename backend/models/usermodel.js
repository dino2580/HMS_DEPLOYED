const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        
    },
    gender: {
        type: String,
        required: true,
        enum: ["M", "F"]
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    currentlyPresent:
    {
        type:Boolean,
        default:true
    },
    admin:
    {
        type:Boolean,
        default:false
    },
   
});

const User = mongoose.model("User", userSchema);

module.exports = User;
