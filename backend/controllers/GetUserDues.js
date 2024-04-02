const accounts = require("../models/Accounts");


const getUserDues=async(req, res) =>{
  try {
    const {user_id}=req.params;
    // Check if the roll number is provided
    
    if (!user_id) {
      throw new Error('User_id is missing from URL parameters');
    }
    // console.log(user_id);
    // Query the database to get user dues and paid information based on roll number
    const account = await accounts.findOne({user_id} ); // Assuming roll number is a unique identifier

    if (!account) {
      throw new Error('User not found');
    }

    // Extract user dues and paid information from the account object
    const { user_dues, user_paid } = account;
    // console.log(user_dues);
    res.json({user_dues, user_paid });
  } catch (error) {
    console.error('Error fetching user dues:', error.message);
    throw error;
  }
}

module.exports=getUserDues;
