const getStudent = async (req, res) => {
    try {
        const { hostel_no } = req.params;

        // Fetch the latest 10 announcements for the given hostel
        if(hostel_no!=0)
        {
        const students = await User.find({ 
            hostel_no
            }).sort(roll_no);
        }
        else{
            const students=await User.find().sort(roll_no);
        }

            
           
        console.log();
        res.json(students);
    } catch (error) {
        console.error("Error in getStudent", error);
        return res.status(500).json({ err: "Error in getStudent" });
    }
};

module.exports = getAnnouncements;
