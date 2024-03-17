const mongoose = require("mongoose");
const paymentsSchema = new mongoose.Schema({
   payment_id:{
    type:Number,
    required:true,
   },
   roll_no: {
        type: Number,
        required: true,
    },
    amount:
    {
        type:Number,
        required:true,
    },
    hostel_no:
   {
    type:String,
    default:""
   }
    
},{ timestamps: true });

const Payments = mongoose.model("Payments", paymentsSchema);

module.exports = Payments;
