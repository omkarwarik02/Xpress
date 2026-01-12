const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const logOutController = require("../controllers/logoutController");


router.post('/login',authController.login);
router.post('/logout',logOutController.Logout);

module.exports = router;