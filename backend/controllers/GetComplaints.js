const Complaints = require("../models/complaintmodel");


const getComplaint = async (req, res) => {
    try {
        const { hostel_no } = req.params;
        console.log(hostel_no);
        // Fetch the latest 10 announcements for the given hostel
        var complaints;
        if(hostel_no!=0)
        {
         complaints = await Complaints.find({ 
            hostel_no
            });

        }
        else{
             Complaints=await Complaints.find();
        }
        Complaints.sort((a, b) => {
            // Assuming createdAt is in milliseconds format
            return a.createdAt - b.createdAt;
        });
        
            
           
        console.log(Complaints);
        res.json(Complaints);
    } catch (error) {
        console.error("Error in getComplaint", error);
        return res.status(500).json({ err: "Error in getComplaint" });
    }
};

module.exports = getComplaint;
