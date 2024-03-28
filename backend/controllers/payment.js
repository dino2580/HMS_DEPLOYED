const braintree = require("braintree");
const updateUserPaid = require("./UpdateUserPaid");
const accountSchema = require("../models/Accounts");
const accounts = require("../models/Accounts");
const Payments = require("../models/Paymentsmodel");

const BRAINTREE_MERCHANT_ID = "zgpjf6x28bbz2pyg";
const BRAINTREE_PUBLIC_KEY = "f28tghbymy2w7m5d";
const BRAINTREE_PRIVATE_KEY = "77e19e7418aeb7f9a1db9a4ba2883965";

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: BRAINTREE_MERCHANT_ID,
  publicKey: BRAINTREE_PUBLIC_KEY,
  privateKey: BRAINTREE_PRIVATE_KEY,
});

const braintreePaymentController = async (req, res) => {
  try {
    const { user_id, nonce,amount,hostel_no } = req.body;
    // const amount = 1; // Assuming a fixed amount for the transaction
    // console.log(nonce);
    // console.log(user_id);
    // console.log(amount);
    // Process payment
    const newTransaction = await gateway.transaction.sale({
      amount: amount,
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    });

    // Check if payment was successful
    if (newTransaction.success) {
      console.log("Success");
      const T_id=newTransaction.transaction.id;
      // Find the account by roll number
      const account = await accountSchema.findOne({user_id});
      const transaction=new Payments(
        {
          T_id,
          user_id,
          amount,
          hostel_no,
          status:true

        }
      )
      await transaction.save();
      // Check if the account exists
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }

      // Update user paid dues
      const updatedPaid = account.user_paid + amount;

      // Update the user paid dues in the database
      await accountSchema.findByIdAndUpdate(account._id, { user_paid: updatedPaid,user_dues:0 });

      console.log(`${user_id} ${amount} User Paid updated successfully`);
      return res.status(200).json({ message: 'User Paid updated successfully' });
    } else {
      console.log("Payment failed");
      return res.status(500).json({ error: newTransaction.message });
    }
  } catch (error) {
    console.error('Error processing payment:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function(err, response) {
      if (err) {
        console.error('Error generating client token:', err);
        return res.status(500).json({ error: 'Failed to generate client token' });
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.error('Error generating client token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
const formTransaction = async (req, res) => {
  try {
    // Extract T_id and amount from the request body
    const { user_id,T_id, amount ,hostel_no} = req.body;
    
    // Validate if T_id and amount are present
    if (!T_id || !amount) {
      return res.status(400).json({ error: 'T_id and amount are required' });
    }
    const transaction=new Payments(
      {
        T_id,
        user_id,
        amount,
        hostel_no

      }
    )
    await transaction.save();
    const account = await accounts.findOne({user_id});

    // Find the account based on T_id
    const updatedPaid = account.user_paid + amount;
   
    // Update the user paid dues in the database
    await accounts.findByIdAndUpdate(account._id, { user_paid: updatedPaid,user_dues:0 });

    return res.status(200).json({ message: 'Transaction saved successfully' });
  } catch (error) {
    console.error('Error processing form transaction:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { braintreePaymentController, braintreeTokenController,formTransaction };
