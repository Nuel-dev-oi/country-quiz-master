import React, { useState } from "react";
import checkMark from "../assets/Check_round_fill.svg";
import closeMark from "../assets/Close_round_fill.svg";

const Options: React.FC<{ optionsArr: string[]; number: number, answer: string }> = ({
  optionsArr,
  number,
  answer,
}) => {
 
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const handleClick = (index: number) => {
    // Prevent changing the answer once a choice is made for this question
    if (userAnswers[number] !== undefined) return;

    setUserAnswers((prev) => ({
      ...prev,
      [number]: index,
    }));
  };

  const currentSelection = userAnswers[number];
  const hasAnswered = currentSelection !== undefined;

  return (
    <div className="sm:m-auto sm:w-full lg:w-[calc(100%-15%)] w-full gap-2 flex flex-col justify-center items-start p-2 whitespace-nowrap text-xl bg-transparent h-max sm:flex-wrap sm:flex-row sm:items-center sm:gap-4">
      {optionsArr.map((option, index) => {
        const isUserPick = currentSelection === index;
        const isActualCorrect = option === answer;

        const shouldShowGradient = isUserPick || (hasAnswered && isActualCorrect);

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`gap-5 cursor-pointer grow sm:grow-0 rounded-md p-2 sm:p-4 w-full sm:w-[calc(100%/2-100px)] lg:w-[calc(100%/2-100px)] text-sm flex justify-center items-center transition-all 
              ${shouldShowGradient 
                ? "bg-linear-to-r from-pink-500 from-40% to-purple-500" 
                : "bg-blue-900"
              }`}
          >
            <span>{option}</span>
            
            <div className="flex gap-2 ml-auto">
              {hasAnswered && isActualCorrect && (
                <img src={checkMark} alt="correct" className="w-5 h-5" />
              )}

              {isUserPick && !isActualCorrect && (
                <img src={closeMark} alt="wrong" className="w-5 h-5" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Options;