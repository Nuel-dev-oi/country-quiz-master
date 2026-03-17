import React from "react";
import NumberTab from "./NumberTab";
import Question from "./Question";
import Options from "./Options";

const QuestionTab: React.FC = (): React.JSX.Element => {
  return (
    <section className="w-[90%] flex flex-col gap-3 justify-start items-start p-2 bg-blue-950 h-[80%] sm:h-max">
      <NumberTab />
      <Question />
      <Options optionLen={4} />
    </section>
  );
};

export default QuestionTab;
