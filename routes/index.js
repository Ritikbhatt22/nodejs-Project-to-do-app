const express = require("express");

const router= express.Router();
const add = require("../controllers/index")

router.get("/" , add.add);
router.use("/user",require('./users'))

module.exports =router;

