const express=require('express');
const { signUp,login, logout } = require('../controllers/auth.controller');
const Complaint = require('./complaintRoute');
const menu = require('../controllers/Messmenu');
const { getMenu } = require('../controllers/GetMenu');
const addHostel = require('../controllers/Hostelscontroller');
const createAnnouncement = require('../controllers/CreateAnnouncement');
const getAnnouncements = require('../controllers/GetAnnouncement');
const getStudent = require('../controllers/GetStudent');
const updateStudent = require('../controllers/UpdateStudent');
const createMessage = require('../controllers/SendMessage');
const getGroupMessage = require('../controllers/GetGroupMessage');
const createGroup = require('../controllers/CreateGroup');
const getGroups = require('../controllers/GetGroup');

const router = express.Router();
router.post("/signup",signUp)
router.post("/login",login);
router.post("/logout",logout)
router.post("/complaint",Complaint);
router.post("/setmenu",menu);
router.post("/getmenu",getMenu);
router.post("/addhostel",addHostel);
router.get("/getStudent:hostel_no",getStudent);
router.post("/updateStudent",updateStudent);
router.post("/createannouncement",createAnnouncement);
router.post('/getannouncements', getAnnouncements);
router.post('/send',createMessage);
router.post('/createGroup',createGroup);
router.get('/getgroup',getGroups);
router.get('/getgroupmessages/:group_id',getGroupMessage);
module.exports =router;