const express = require("express");
const router = new express.Router();
const userControllers = require("../controllers/userControllers");
const hostControllers = require("../controllers/hostController");

// User Routes
router.post("/user/register", userControllers.userregister);
router.post("/user/sendotp", userControllers.userOtpSend);
router.post("/user/login", userControllers.userLogin);
router.get("/user/getUsers", userControllers.getAlluser);
 
// Host Routes getAlluser
router.post("/host/signup", hostControllers.hostSignUp);
router.post("/host/signin", hostControllers.hostSignIn);
router.post("/host/sendotp", hostControllers.hostSendOtp);
router.get("/host/all", hostControllers.getAllHosts);
router.post("/host/signin-password", hostControllers.hostSignInWithPassword); // Email and password based
router.put("/host/updatePassword", hostControllers.updatePassword); // Update password


module.exports = router;
