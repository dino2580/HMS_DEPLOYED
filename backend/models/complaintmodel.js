const mongoose = require("mongoose");


const complaintSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   rollNumber: {
        type: Number,
        required: true,
    },
    complaintType:
    {
        type:String,
        required:true,

    },
    id:{
        type:Number,
        required:true,
    },
    message: 
    {
        type: String,
        required:true,
        minLength:8
    },
    status:
    {
        type:Boolean,
        default:false
    }
},{ timestamps: true });

const Complaints = mongoose.model("Complaints", complaintSchema);

module.exports = Complaints;
