const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    roll_no: {
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
    date_of_joining: {
        type: Date,
        required: true
    },
    profile_pic: {
        type: String,
        default: ""
    },
    currently_present:
    {
        type:Boolean,
        default:true
    },
    admin:
    {
        type:Boolean,
        default:false
    },
   room_number:
   {
    type:String,
    default:""
   },
   hostel_no:
   {
    type:String,
    default:"0"
   },
   hostel_id:
   {
    type:String,
    default:"0"
   },

   
});

const User = mongoose.model("User", userSchema);

module.exports = User;
