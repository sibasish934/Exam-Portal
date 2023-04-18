import express from "express";
import { getALLQuestions, getAnswers, postController } from "../controller/openController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.post("/post", isAuthenticatedUser ,postController);
router.get("/getAllQuestions", getALLQuestions);
router.get("/getAnswer/:id", isAuthenticatedUser, getAnswers);

export default router;