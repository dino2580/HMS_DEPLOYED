const mongoose = require('mongoose');

const mongoURI = "";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected to database")).catch((e)=>{
      console.log(e);
      console.log("Not connected to database");
    }
    )
  }
  
  module.exports = connectToMongo;