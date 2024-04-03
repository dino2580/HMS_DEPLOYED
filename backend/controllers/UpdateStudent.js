const User = require("../models/usermodel");


const updateStudent = async (req, res) => {
  try {
      const { name, Roll, email, Room, hostel_no, userId } = req.body;
      // console.log(name+ roll+ email+ room_no+ hostel_no+ userId)
      console.log("Updating student with ID:", userId);

      // Find the student document by ID
      const student = await User.findOne({ _id: userId });
      console.log("roll"+Roll)

      if (!student) {
          console.log("Student not found");
          return res.status(404).json({ error: "Student not found" });
      }

      // Update the relevant fields
      student.full_name = name;
      student.roll_no = Roll;
      student.email = email;
      student.room_number = Room;
      student.hostel_no = hostel_no;

      // Save the updated student document
      const updatedStudent = await student.save();

      console.log("Updated student:", updatedStudent);

      res.json("Student updated");
  } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
          // Duplicate email error
          return res.status(400).json({ error: "Email address already in use." });
      }
      console.error("Error in Student Updatation", error);
      return res.status(500).json({ error: "Error in Student Updatation" });
  }
};


module.exports=updateStudent;