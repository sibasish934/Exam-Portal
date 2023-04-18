import express from  "express";
import { getUserDetails, loginUser, logout, register } from "../controller/userController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.post('/register',register);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/me', isAuthenticatedUser, getUserDetails);

export default router;