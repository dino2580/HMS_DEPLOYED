
const mongoose = require("mongoose");


const accountSchema = new mongoose.Schema({
    roll_no: {
        type: Number,
        required: true,
        unique: true
    },
    user_dues:{
        type:Number,
        default:0,
    },
    user_paid:{
        type:Number,
        default:0,
    },
    hostel_no:
   {
    type:String,
    default:""
   }
   
});

const accounts = mongoose.model("Accounts", accountSchema);

module.exports = accountSchema;
