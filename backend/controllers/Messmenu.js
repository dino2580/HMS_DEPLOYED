const MessModel = require("../models/MessModel");

const menu = async (req, res) => {
    try {
        const { day, breakfast, breakfast_extra, lunch, lunch_extra, snacks, dinner, dinner_extra } = req.body;

        // Find the menu for the specified day and update it if it exists, otherwise create a new one
        const updatedMenu = await MessModel.findOneAndUpdate(
            { day },
            { $set: { day, breakfast, breakfast_extra, lunch, lunch_extra, snacks, dinner, dinner_extra } },
            { new: true, upsert: true }
        );

        if (updatedMenu) {
            return res.status(200).json("Menu updated");
        } else {
            return res.status(202).json("Menu created");
        }

    } catch (error) {
        console.error("Error in updating menu:", error);
        return res.status(500).json({ err: "Error in updating menu" });
    }
};
module.exports=menu;
