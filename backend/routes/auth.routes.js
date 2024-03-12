const express=require('express');
const { signUp,login } = require('../controllers/auth.controller');
const Complaint = require('./complaintRoute');

const router = express.Router();
router.post("/signup",signUp)
router.post("/login",login);
router.post("/complaint",Complaint);
module.exports = router;