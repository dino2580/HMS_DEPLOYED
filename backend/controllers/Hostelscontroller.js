const HostelModel = require("../models/hostelmodel");
const addHostel = async (req, res) => {
    try {
        const { hostel_name, hostel_no, address, total_rooms, student_capacity, warden, contact_number, email } = req.body;
        const { fans, refrigerators, waterCoolers, beds, chairs } = req.body.materialistic_assets;

        const newHostel = new HostelModel({
            hostel_name,
            hostel_no,
            address,
            total_rooms,
            student_capacity,
            materialistic_assets: {
                fans,
                refrigerators,
                waterCoolers,
                beds,
                chairs
            },
            warden,
            contact_number,
            email
        });

        const savedHostel = await newHostel.save();
        res.status(201).json(savedHostel); // Respond with the saved hostel
    } catch (error) {
        console.error("Error adding hostel:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports=addHostel;