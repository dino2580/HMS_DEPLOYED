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
        minlength: 8
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
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
