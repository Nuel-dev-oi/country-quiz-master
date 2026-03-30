import React from "react";

const ScoreBoard = ({
  score,
  isFinished,
}: {
  score: number;
  isFinished: boolean;
}): React.JSX.Element => {
  return (
    <div className="flex justify-between text-sm mt-4 w-[90%] p-4 rounded-3xl items-center h-[10%] sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2">
      <div className="text-xl">{!isFinished && "Country Quiz"}</div>
      <div
        className={`transition-all ${isFinished ? "fixed portrait:top-[50%] md:top-[50%] not-md:landscape:top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-45 text-3xl" : ""} bg-linear-to-r from-pink-500 text-center w-25 font-medium to-purple-300 p-1 rounded-[20px]`}
      >
        {score}/10 Points
      </div>
    </div>
  );
};

export default ScoreBoard;
