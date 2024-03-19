const GroupModel = require("../models/GroupModel");


const getGroups = async (req, res) => {
    try {
        
        // Fetch the latest 10 announcements for the given hostel
        const GroupChat=await GroupModel.find()
        // console.log(GroupChat)
        res.status(202).json(GroupChat);
    } catch (error) {
        console.error("Error in retreiving group chat", error);
        return res.status(500).json({ err: "Error in retreiving group chat" });
    }
};

module.exports = getGroups;
