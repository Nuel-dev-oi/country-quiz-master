import express from "express";
import sendQuestions from "../controllers/questions.controller.js";

const router = express.Router();

router.route("/").get(sendQuestions);


export default router;
