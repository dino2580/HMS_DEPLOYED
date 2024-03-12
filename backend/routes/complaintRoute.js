const Complaints = require('../models/complaintmodel.js');
const User = require('../models/usermodel.js');
const {Counter,getNextSequenceValue} = require('../models/counterModel.js');

const Complaint = async (req, res) => {
    console.log("complain reache");
    try {
        const { name, rollNumber, complaintType, message } = req.body;
        console.log(req.body);
        console.log(name,rollNumber,complaintType)

        
        const user = await User.findOne({ rollNumber });
        console.log(user);
        
       
        if (!user) {
            return res.status(404).json({ err: "User does not exist" });
        }
        const nextId = await getNextSequenceValue('id');


        const newComplaint = new Complaints({
            name,
            rollNumber,
            complaintType,
            id:nextId,
            message,
        });
        await newComplaint.save();

        return res.status(201).json({
            id:newComplaint.id
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ err: "Error in Complaints" });
    }
};
module.exports=Complaint;