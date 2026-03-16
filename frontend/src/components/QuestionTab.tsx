import React from "react";
import NumberTab from "./NumberTab";

const QuestionTab: React.FC = (): React.JSX.Element => {
  return (
    <section className="w-[90%] flex flex-col justify-start items-start p-2 bg-blue-950 h-[80%]">
      <NumberTab />
    </section>
  );
};

export default QuestionTab;
