const express=require('express');
const { signUp,login, logout } = require('../controllers/auth.controller');
const Complaint = require('./complaintRoute');

const router = express.Router();
router.post("/signup",signUp)
router.post("/login",login);
router.post("/logout",logout)
router.post("/complaint",Complaint);
module.exports = router;