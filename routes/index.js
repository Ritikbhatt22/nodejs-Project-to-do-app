const express = require("express");

const router= express.Router();
const add = require("../controllers/index")

router.get("/home" , add.add);


module.exports =router;