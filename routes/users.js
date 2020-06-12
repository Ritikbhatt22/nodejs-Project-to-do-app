
const express = require("express");

const router= express.Router();

let user = require('../controllers/users')

router.get('/profile',user.adduser);

module.exports= router;

