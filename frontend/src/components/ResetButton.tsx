import React from "react";
import { countryQuizData, type QuizQuestions } from "../utils/countryQuizData";

const ResetButton = ({ onSetQuiz }: { onSetQuiz:(value: QuizQuestions) => void }): React.JSX.Element => {

    return <button 
    onClick={() => {
        onSetQuiz([...countryQuizData]);
    }}
    className="text-[14px] absolute sm:right-30 right-11 sm:bottom-0 -bottom-3 max-[400px]:bottom-10 cursor-pointer bg-blue-900 text-white flex justify-center items-center active:shadow-[0px_0px_1px_0px] shadow-[0px_0px_2px_1px] shadow-blue-200 whitespace-nowrap w-max p-3 rounded-md">Reset Quiz</button>

};

export default ResetButton;