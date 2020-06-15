const express = require("express");

const router= express.Router();
const showTask = require("../controllers/index")
router.post('/deleteTask',showTask.deleteTask)
router.get("/" , showTask.showList);
// router.use("/",require('./users'))
router.post('/addTask',showTask.addtask);
// router.get("/deleteSingleTask",showTask.deleteSingleTask)
// router.get("/getTask",showTask.getTask)
module.exports =router;

