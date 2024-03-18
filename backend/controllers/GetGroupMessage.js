const GroupModel = require("../models/GroupModel");


const getGroupMessage = async (req, res) => {
    try {
        const { group_id } = parms.body;
        
        // Fetch the latest 10 announcements for the given hostel
        const GroupChat=GroupModel.find(group_id).populate("messages");
        res.status(202).json(GroupChat);
    } catch (error) {
        console.error("Error in retreiving group chat", error);
        return res.status(500).json({ err: "Error in retreiving group chat" });
    }
};

module.exports = getGroupMessage;
