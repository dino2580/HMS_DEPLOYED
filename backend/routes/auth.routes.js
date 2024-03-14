const express=require('express');
const { signUp,login, logout } = require('../controllers/auth.controller');
const Complaint = require('./complaintRoute');
const menu = require('../controllers/Messmenu');
const { getMenu } = require('../controllers/GetMenu');
const addHostel = require('../controllers/Hostelscontroller');
const createAnnouncement = require('../controllers/CreateAnnouncement');
const getAnnouncements = require('../controllers/GetAnnouncement');

const router = express.Router();
router.post("/signup",signUp)
router.post("/login",login);
router.post("/logout",logout)
router.post("/complaint",Complaint);
router.post("/setmenu",menu);
router.post("/getmenu",getMenu);
router.post("/addhostel",addHostel);
router.get("/getStudent",)
router.post("/createannouncement",createAnnouncement);
router.post('/getannouncements', getAnnouncements);
module.exports =router;