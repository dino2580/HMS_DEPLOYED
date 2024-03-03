const Complaints = require('../models/complaintmodel.js');
const User = require('../models/usermodel.js');
const {Counter,getNextSequenceValue} = require('../models/counterModel.js');

const Complaint = async (req, res) => {
    try {
        const { rollNumber, message } = req.body;

        
        const user = await User.findOne({ rollNumber });
        
       
        if (!user) {
            return res.status(404).json({ err: "User does not exist" });
        }
        const nextId = await getNextSequenceValue('id');


        const newComplaint = new Complaints({
            
            rollNumber,
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