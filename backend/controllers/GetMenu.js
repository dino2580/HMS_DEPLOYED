const MessModel = require("../models/MessModel");

const getMenu = async (req, res) => {
    try {
        const {day,hostel_no}=req.body;
        console.log(req.body);
        // Fetch all menu items from the database
        const menuItems = await MessModel.findOne({ day: day, hostel_no: hostel_no });

        console.log(menuItems)

        // Check if menu items exist
        if (!menuItems) {
            return res.status(404).json({ message: "Menu not found" });
        }
        console.log(menuItems);
        // Return the menu items
        return res.status(200).json(menuItems);
    } catch (error) {
        console.error("Error fetching menu:", error);
        return res.status(500).json({ error: "Error fetching menu" });
    }
};

module.exports = { getMenu };
