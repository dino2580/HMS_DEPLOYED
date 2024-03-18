const GroupModel = require("../models/GroupModel");


const getGroupMessage = async (req, res) => {
    try {
        console.log("React")
        const { group_id } = req.params;
        console.log(group_id)
        // Fetch the latest 10 announcements for the given hostel
        const GroupChat=await GroupModel.find({group_id:group_id}).populate("messages");
        console.log(GroupChat)
        res.status(202).json(GroupChat);
    } catch (error) {
        console.error("Error in retreiving group chat", error);
        return res.status(500).json({ err: "Error in retreiving group chat" });
    }
};

module.exports = getGroupMessage;
