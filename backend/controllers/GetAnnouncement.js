const Announcement = require("../models/Announcementsmodel");

const getAnnouncements = async (req, res) => {
    try {
        const { hostel_no } = req.body;

        // Fetch the latest 10 announcements for the given hostel
        
        const announcements = await Announcement.find({ 
            hostel_no
            })
            .sort({ createdAt: -1 }) // Sort by descending createdAt timestamp
           
        console.log(announcements);
        res.json(announcements);
    } catch (error) {
        console.error("Error in getAnnouncements", error);
        return res.status(500).json({ err: "Error in Get Announcements" });
    }
};

module.exports = getAnnouncements;
