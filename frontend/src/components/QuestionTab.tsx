import React, { useState, useContext, useMemo } from "react";
import NumberTab from "./NumberTab";
import Question from "./Question";
import Options from "./Options";
import QuestionContext from "./QuestionContext";

const QuestionTab: React.FC = (): React.JSX.Element => {
  const [number, setNumber] = useState<number>(1);
  const questions = useContext(QuestionContext);

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
      />
      <Options optionLen={4} />
    </section>
  );
};

export default QuestionTab;
