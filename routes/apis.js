const express = require('express');
const router = express.Router();

const apicontrol=require("../controller/apis");

router.get('/home', apicontrol.home);

module.exports = router;