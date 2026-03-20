import React from "react";

const ScoreBoard = ({ score }: { score: number }): React.JSX.Element => {

  return (
    <div className="flex justify-between text-sm mt-4 w-[90%] p-4 rounded-3xl items-center h-[10%] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
      <div className="text-xl">Country Quiz</div>
      <div className="bg-linear-to-r from-pink-500 text-center w-25 font-medium to-purple-300 p-1 rounded-[20px]">
        {score}/10 Points
      </div>
    </div>
  );
};

export default ScoreBoard;
