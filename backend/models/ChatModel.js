const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
   roll_no:{
    type:Number,
    required:true,
   },
   message:{
    type:String,
    required:true,
   },
   hostel_no:
   {
    type:String,
    default:""
   }
   
},{timestamps:true});

const ChatModel = mongoose.model("ChatModel", chatSchema);

module.exports = ChatModel;
