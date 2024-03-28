const mongoose = require("mongoose");
const paymentsSchema = new mongoose.Schema({
   T_id:{
    type:String,
    required:true,
   },
   user_id: {
        type: String,
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
   },
   status:
   {
    type:Boolean,
    default:false
   },
    
},{ timestamps: true });

const Payments = mongoose.model("Payments", paymentsSchema);

module.exports = Payments;
