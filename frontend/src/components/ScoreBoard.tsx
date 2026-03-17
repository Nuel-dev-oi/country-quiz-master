import React, { useEffect, useState } from "react";

const ScoreBoard = (): React.JSX.Element => {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    (function () {
      setScore(0);
    })();
  }, []);

  return (
    <div className="flex justify-between text-sm mt-4 w-[90%] p-4 rounded-3xl items-center h-[10%]">
      <div className="text-xl">Country Quiz</div>
      <div className="bg-linear-to-r from-pink-500 text-center w-25 font-medium to-purple-300 p-1 rounded-[20px]">
        {score}/10 Points
      </div>
    </div>
  );
};

export default ScoreBoard;
