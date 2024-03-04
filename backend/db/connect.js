const mongoose = require("mongoose");

const mongoURI ="mongodb+srv://scholarhub:hRWz0IupvgPKcRsx@cluster0.bjnjeu0.mongodb.net/hms?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error in connecting to database:", err);
  }
};

module.exports = connectToMongo;
