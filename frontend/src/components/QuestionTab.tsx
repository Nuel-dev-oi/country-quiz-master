import React, { useContext, useMemo, useCallback, useState } from "react";
import NumberTab from "./NumberTab";
import Question from "./Question";
import Options from "./Options";
import QuestionContext from "./QuestionContext";

const QuestionTab: React.FC<{ setScore: React.Dispatch<number | ((prev: number) => number)>, 
  number:number, setNumber:React.Dispatch<number>,
    
    setAnswer: React.Dispatch<string>,
    answer: string,
    reset: boolean,
    setReset: React.Dispatch<boolean>
  }> = ({ setScore, number, setNumber, setAnswer, answer, reset, setReset }): React.JSX.Element => {
  const questions = useContext(QuestionContext);
  const [options, setOptions] = useState<string[]>([]);
  const onSetAnswer = useCallback((value: string) => {
    setAnswer(value);
  }, [setAnswer]);

  const onSetOptions = useCallback((value: string[]) => {
    setOptions(value);
  }, [setOptions]);

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const num = e.currentTarget.textContent;
    setNumber(Number(num));
  };

  return (
    <section className="sm:mb-25 w-[90%] flex flex-col gap-3 justify-start items-start p-2 bg-blue-950 h-max max-[400px]:h-[80%] md:h-full sm:h-max md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 ">
      <NumberTab onClick={onClick} reset={reset} />
      <Question
        number={number}
        questions={useMemo(() => questions, [questions])}
        onSetOptions={onSetOptions}
        onSetAnswer={onSetAnswer}
      />
      <Options number={number} optionsArr={options} answer={answer}  setScore={setScore} reset={reset} setReset={setReset} />
    </section>
  );
};

export default QuestionTab;
