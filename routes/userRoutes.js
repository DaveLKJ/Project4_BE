const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middleware/authenticateToken");

// Routes
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", authenticateToken, userController.logout);
router.post("/profile", authenticateToken, userController.getUserInfo);
router.post("/profile", authentication, userController.updateUserProfile);

module.exports = router;
