const mongoose = require("mongoose");


const complaintSchema = new mongoose.Schema({
   rollNumber: {
        type: Number,
        required: true,
        
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
    }
},{ timestamps: true });

const Complaints = mongoose.model("Complaints", complaintSchema);

module.exports = Complaints;
