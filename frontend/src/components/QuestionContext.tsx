import { createContext } from "react";
import { type QuizQuestions } from "../utils/countryQuizData";

const QuestionContext = createContext<QuizQuestions>([]);

export default QuestionContext;
