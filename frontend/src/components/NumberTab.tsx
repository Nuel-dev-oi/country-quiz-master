import React, { useRef } from "react";

const NumberTab: React.FC = (): React.JSX.Element => {
  const numberRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const current = numberRef.current;
    if (!current) return;
    const spans: NodeListOf<HTMLSpanElement> = current.querySelectorAll("span");
    spans.forEach((span) => {
      const hasBgGradient = span.classList.contains("bg-linear-to-r");
      if (hasBgGradient) {
        span.classList.remove("bg-linear-to-r");
        span.classList.add("bg-blue-900");
      }
      e.currentTarget.classList.add("bg-linear-to-r");
      e.currentTarget.classList.remove("bg-blue-950");
    });
  };

  return (
    <div
      ref={numberRef}
      className="w-full gap-3 flex-wrap flex justify-center items-start p-0 bg-blue-950 h-max"
    >
      {new Array(11).fill(0).map((_, index) => {
        return (
          <span
            key={index}
            onClick={(e) => {
              handleClick(e);
            }}
            className="transition-all duration-500 ease-in-out cursor-pointer rounded-[100%] w-8 h-8 flex justify-center items-center bg-blue-900 text-center font-medium text-sm from-pink-500 to-purple-300"
          >
            {index}
          </span>
        );
      })}
    </div>
  );
};

export default NumberTab;
