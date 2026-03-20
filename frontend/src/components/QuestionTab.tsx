import React, { useState, useContext, useMemo, useCallback } from "react";
import NumberTab from "./NumberTab";
import Question from "./Question";
import Options from "./Options";
import QuestionContext from "./QuestionContext";

const QuestionTab: React.FC = (): React.JSX.Element => {
  const questions = useContext(QuestionContext);
  const [number, setNumber] = useState<number>(1);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");

  const onSetAnswer = useCallback((value: string) => {
    setAnswer(value);
  }, []);

  const onSetOptions = useCallback((value: string[]) => {
    setOptions(value);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const num = e.currentTarget.textContent;
    setNumber(Number(num));
  };

  return (
    <section className="w-[90%] flex flex-col gap-3 justify-start items-start p-2 bg-blue-950 h-max max-[400px]:h-[80%] md:h-full sm:h-max md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 ">
      <NumberTab onClick={onClick} />
      <Question
        number={number}
        questions={useMemo(() => questions, [questions])}
        onSetOptions={onSetOptions}
        onSetAnswer={onSetAnswer}
      />
      <Options number={number} optionsArr={options} answer={answer} />
    </section>
  );
};

export default QuestionTab;
