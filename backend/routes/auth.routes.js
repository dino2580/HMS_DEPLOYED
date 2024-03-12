const express=require('express');
const { signUp,login, logout } = require('../controllers/auth.controller');
const Complaint = require('./complaintRoute');
const menu = require('../controllers/Messmenu');
const { getMenu } = require('../controllers/GetMenu');

const router=express.Router();
router.post("/signup",signUp)
router.post("/login",login);
router.post("/logout",logout)
router.post("/complaint",Complaint);
router.post("/setmenu",menu);
router.post("/getmenu",getMenu);
module.exports =router;