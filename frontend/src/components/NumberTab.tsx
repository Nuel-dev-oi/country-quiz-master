import React, { useRef, useEffect } from "react";

interface click {
  (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void;
}

const NumberTab: React.FC<{ onClick: click }> = ({
  onClick,
}): React.JSX.Element => {
  const spanRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const current = spanRef.current;
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

  useEffect(() => {
    const loadBGColor = () => {
      const current = spanRef.current;
      if (!current) return;
      const spans: NodeListOf<HTMLSpanElement> =
        current.querySelectorAll("span");
      spans.forEach((span, index) => {
        if (index === 0) {
          span.classList.remove("bg-blue-900");
          span.classList.add("bg-linear-to-r");
          return;
        }
      });
    };
    loadBGColor();
  }, []);

  return (
    <div
      ref={spanRef}
      className="w-full gap-3 flex-wrap flex justify-center items-start bg-blue-950 h-[30%] max-[400px]:h-[20%] md:items-center"
    >
      {new Array(10).fill(0).map((_, index) => {
        return (
          <span
            key={index}
            onClick={(e) => {
              handleClick(e);
              onClick(e);
            }}
            className="transition-colors duration-500 ease-in-out cursor-pointer rounded-[100%] w-8 h-8 flex justify-center items-center bg-blue-900 text-center font-medium text-sm from-pink-500 to-purple-300"
          >
            {index + 1}
          </span>
        );
      })}
    </div>
  );
};

export default NumberTab;
