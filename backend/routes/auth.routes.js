const express = require('express');
const { signUp, login, logout, emailVerification, otpcheck } = require('../controllers/auth.controller');
const Complaint = require('./complaintRoute');
const menu = require('../controllers/Messmenu');
const { getMenu } = require('../controllers/GetMenu');
const { getallhostels, addHostel, gethostel } = require('../controllers/Hostelscontroller'); // Import getallhostels directly
const createAnnouncement = require('../controllers/CreateAnnouncement');
const getAnnouncements = require('../controllers/GetAnnouncement');
const getStudent = require('../controllers/GetStudent');
const updateStudent = require('../controllers/UpdateStudent');
const createMessage = require('../controllers/SendMessage');
const getGroupMessage = require('../controllers/GetGroupMessage');
const createGroup = require('../controllers/CreateGroup');
const getGroups = require('../controllers/GetGroup');
const getComplaint = require('../controllers/GetComplaints');
const createWorker = require('../controllers/CreateWorker');
const getWorker = require('../controllers/GetWorkers');
const { braintreeTokenController, braintreePaymentController, formTransaction } = require('../controllers/payment');
const updateUserPaid = require('../controllers/UpdateUserPaid');
const createAccount = require('../controllers/CreateAccount');
const getUserDues = require('../controllers/GetUserDues');
const updateUserDues = require('../controllers/UpdateUserDues');
const getTransactions = require('../controllers/GetTransaction');

const router = express.Router();
router.post("/emailverification", emailVerification);
router.post("/otpcheck", otpcheck);
router.post("/signup",signUp);
router.post("/login", login);
router.post("/logout", logout);
router.post("/complaint", Complaint);
router.get("/getallcomplaints", getComplaint.getAllComplaint);
router.post("/getcomplaint", getComplaint.getComplaint);
router.post("/setmenu", menu);
router.post("/getmenu", getMenu);
router.post("/addhostel", addHostel);
router.post("/createworker", createWorker);
router.post("/getworker", getWorker);
router.get("/getallstudent", getStudent);
router.post("/updateStudent", updateStudent);
router.post("/createannouncement", createAnnouncement);
router.post('/getannouncements', getAnnouncements);
router.post('/send', createMessage);
router.post('/createGroup', createGroup);
router.post('/userpaid', updateUserPaid);
router.get('/getgroup', getGroups);
router.post('/formtransaction', formTransaction);
router.get('/transactions/:user_id', getTransactions);
router.post('/createaccount', createAccount);
router.get('/getgroupmessages/:group_id', getGroupMessage);
router.get('/getuserdues/:user_id', getUserDues);
router.post('/updateuserdues', updateUserDues);
router.get('/braintree/token', braintreeTokenController);
router.post('/braintree/payment', braintreePaymentController);

router.get('/getallhostels', getallhostels); // Use getallhostels directly
router.post('/gethostel', gethostel); // Use getallhostels directly
module.exports = router;
