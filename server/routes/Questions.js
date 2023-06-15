import express from "express";
import { Ask, getAllQuestions, deleteQuestion, voteQuestion } from "../controllers/Questions.js";
import auth from "../middlewares/auth.js";

const router=express.Router();

router.post('/Ask', auth, Ask);
router.get('/Get',getAllQuestions);
router.delete('/delete/:id', auth, deleteQuestion);
router.patch('/vote/:id', auth, voteQuestion)

export default router