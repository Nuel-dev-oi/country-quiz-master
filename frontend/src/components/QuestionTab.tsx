import React, { useContext, useMemo, useCallback, useState } from "react";
import NumberTab from "./NumberTab";
import Question from "./Question";
import Options from "./Options";
import QuestionContext from "./QuestionContext";

const QuestionTab: React.FC<{
  setScore: React.Dispatch<number | ((prev: number) => number)>;
  number: number;
  setNumber: React.Dispatch<number>;
  isFinished: boolean;
  onSetIsFinished: (value: boolean) => void;
  setAnswer: React.Dispatch<string>;
  answer: string;
  reset: boolean;
  setReset: React.Dispatch<boolean>;
}> = ({
  setScore,
  number,
  setNumber,
  setAnswer,
  answer,
  reset,
  setReset,
  isFinished,
  onSetIsFinished,
}): React.JSX.Element | null => {
  const questions = useContext(QuestionContext);
  const [options, setOptions] = useState<string[]>([]);
  const quizQuestions = useMemo(() => questions, [questions]);

  const onSetAnswer = useCallback(
    (value: string) => {
      setAnswer(value);
    },
    [setAnswer],
  );

  const onSetOptions = useCallback(
    (value: string[]) => {
      setOptions(value);
    },
    [setOptions],
  );

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const num = e.currentTarget.textContent;
    setNumber(Number(num));
  };

  if (isFinished) {
    return null;
  }

  return (
    <section
      className={`transition-opacity ${isFinished ? "opacity-0" : "opacity-100"} sm:mb-0 w-[90%] flex flex-col gap-3 justify-start items-start p-2 bg-blue-950 h-max max-[400px]:h-[80%] md:h-full sm:h-max sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 `}
    >
      <NumberTab onClick={onClick} reset={reset} />
      <Question
        number={number}
        questions={quizQuestions}
        onSetOptions={onSetOptions}
        onSetAnswer={onSetAnswer}
      />
      <Options
        number={number}
        optionsArr={options}
        answer={answer}
        setScore={setScore}
        reset={reset}
        setReset={setReset}
        onSetIsFinished={onSetIsFinished}
      />
    </section>
  );
};

export default QuestionTab;
