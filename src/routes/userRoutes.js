const express = require("express");
const userController = require("../controllers/authController.js");
const router = express.Router();

router.post("/userRegister", userController.register);
router.post("/userLogin", userController.login);

module.exports = router;
