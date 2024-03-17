const User = require("../models/usermodel");



const updateStudent = async (req, res) => {
    try {
        const {full_name,roll_no,email,room_number,hostel_no} = req.body;
       
    
            const updatedStudent = await User.findOneAndUpdate(
                {roll_no:roll_no},
                {
                  $set: {
                    roll_no,
                    full_name,
                    email,
                    room_number,
                    hostel_no
                    
                  },
                },
                { new: true, upsert: true }
              );
              await updatedStudent.save();
              res.json("Student updated");

        }
        
    
      
    catch (error) {
        console.error("Error in Student Updatation", error);
        return res.status(500).json({ err: "Error in Student Updatation" });
    }   
};





module.exports=updateStudent;