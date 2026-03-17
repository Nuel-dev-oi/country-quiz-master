import React, { useRef } from "react";

const Options: React.FC<{ optionLen: number }> = ({
  optionLen,
}): React.JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const current = divRef.current;
    if (!current) return;
    const divs: NodeListOf<HTMLDivElement> = current.querySelectorAll("div");
    divs.forEach((div) => {
      const hasBgGradient = div.classList.contains("bg-linear-to-r");
      if (hasBgGradient) {
        div.classList.remove("bg-linear-to-r");
        div.classList.add("bg-blue-900");
      }
      e.currentTarget.classList.add("bg-linear-to-r");
      e.currentTarget.classList.remove("bg-blue-950");
    });
  };

  return (
    <div
      ref={divRef}
      className="w-full gap-2 flex flex-col justify-center items-start p-2 whitespace-nowrap text-xl bg-transparent h-max max-[400px]:h-[calc(100%-16px-20%-15%)]"
    >
      {new Array(optionLen).fill("option goes here").map((option) => {
        return (
          <div
            onClick={(e) => {
              handleClick(e);
            }}
            className="cursor-pointer grow sm:grow-0 rounded-md p-1.25 bg-blue-900 w-full text-sm flex justify-center items-center from-pink-500 from-40% to-purple-500"
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
