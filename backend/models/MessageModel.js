const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
   roll_no:{
    type:Number,
    required:true,
   },
   message:{
    type:String,
    required:true,
   },
   group_id:
   {
    type:Number,
    required:true
   }
   
},{timestamps:true});

const MessageModel = mongoose.model("MessageModel", messageSchema);

module.exports = MessageModel;
