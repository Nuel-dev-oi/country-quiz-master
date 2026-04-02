import express, {type Request, type Response} from "express";
import { countryQuizData } from "../utils/countryQuizQuestions.js";

const sendQuestions = (req: Request, res: Response) => {
    res.status(200).json({ "confirmation": "OK", "data": countryQuizData});
}

export default sendQuestions;