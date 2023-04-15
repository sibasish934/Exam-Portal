import express from "express";
import { getALLQuestions, getAnswers, postController } from "../controller/openController.js";

const router = express.Router();

router.post("/post", postController);
router.get("/getAllQuestions", getALLQuestions);
router.get("/getAnswer/:id", getAnswers)

export default router;