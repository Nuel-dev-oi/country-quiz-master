import React, { useState, useEffect } from "react"; // <-- Added useEffect here!
import checkMark from "../assets/Check_round_fill.svg";
import closeMark from "../assets/Close_round_fill.svg";

const Options: React.FC<{
  optionsArr: string[];
  number: number;
  answer: string;
  setScore: React.Dispatch<number | ((prev: number) => number)>;
  reset: boolean;
  setReset: React.Dispatch<boolean>;
  onSetIsFinished: (value: boolean) => void;
}> = ({
  optionsArr,
  number,
  answer,
  reset,
  setScore,
  setReset,
  onSetIsFinished,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    const handleReset = () => {
      if (reset) {
        setUserAnswers({});
        setReset(false);
      }
    };
    handleReset();
  }, [reset, setReset]);

  const handleClick = (index: number) => {
    if (userAnswers[number] !== undefined) return;

    setUserAnswers((prev) => ({
      ...prev,
      [number]: index,
    }));

    if (optionsArr[index] === answer) {
      setScore((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const keys = new Set<string>([]);
    const items = Object.entries(userAnswers);
    let isAllQuestionsAnswered: boolean | undefined;
    if (!items.length) return;
    const handleIsFinished = () => {
      for (const key in userAnswers) {
        if (keys.has(key)) {
          continue;
        } else {
          keys.add(key);
        }
      }
      if (Array.from(keys).length === 10) {
        isAllQuestionsAnswered = Array.from(keys)
          .map((key: string) => userAnswers[Number(key)])
          .every((value) => value !== undefined);
        if (!isAllQuestionsAnswered) {
          onSetIsFinished(false);
          return;
        }
        onSetIsFinished(true);
      }
    };
    handleIsFinished();
  }, [userAnswers, onSetIsFinished]);

  const currentSelection = userAnswers[number];
  const hasAnswered = currentSelection !== undefined;

  return (
    <div className="sm:m-auto sm:w-full lg:w-[calc(100%-15%)] w-full gap-2 flex flex-col justify-center items-start p-2 whitespace-nowrap text-xl bg-transparent h-max sm:flex-wrap sm:flex-row sm:items-center sm:gap-4">
      {optionsArr.map((option, index) => {
        const isUserPick = currentSelection === index;
        const isActualCorrect = option === answer;

        const shouldShowGradient = isUserPick;

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`gap-5 cursor-pointer grow sm:grow-0 rounded-md p-2 sm:p-4 w-full sm:w-[calc(100%/2-100px)] lg:w-[calc(100%/2-100px)] text-sm flex justify-center items-center transition-all 
              ${
                shouldShowGradient
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
