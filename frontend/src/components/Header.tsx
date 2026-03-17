import React, { useEffect, useRef } from "react";

const Header = (): React.JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const opacityRef = useRef(false);
  const COUNTRY_QUIZ_MASTER = "COUNTRY QUIZ MASTER";
  const IS_NEG = useRef(false);
  const IS_POS = useRef(true);
  const opacity = useRef(1);
  const ANIMATION_STATE = useRef("start");

  useEffect(() => {
    let animationID: number;
    const header = ref.current;
    if (!header) return;
    const spans: NodeListOf<HTMLSpanElement> = header!.querySelectorAll("span");

    function animate() {
      spans.forEach((span: HTMLSpanElement, index) => {
        let top = span.getBoundingClientRect().top;
        top += -index + 20;
        if (top >= 0) {
          top = 0;
          if (index === spans.length - 1) {
            opacityRef.current = true;
          }
          span.classList.remove("relative");
        }
        span.style.top = `${top}px`;

        if (opacityRef.current) {
          if (IS_POS.current) {
            opacity.current -= 0.001;
            span.style.opacity = String(opacity.current);
            if (opacity.current <= 0) {
              IS_POS.current = false;
              IS_NEG.current = true;
            }
          }

          if (IS_NEG.current) {
            opacity.current += 0.001;
            span.style.opacity = String(opacity.current);
            if (opacity.current >= 1) {
              opacity.current = 1;
              span.style.opacity = String(opacity.current);
              cancelAnimationFrame(animationID);
              ANIMATION_STATE.current = "end";
            }
          }
        }
      });
      if (ANIMATION_STATE.current === "start") {
        animationID = requestAnimationFrame(animate);
      }
    }
    animate();

    return () => cancelAnimationFrame(animationID);
  }, []);

  return (
    <header
      ref={ref}
      className="font-bitcount font-bold sm:p-6 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 sticky top-0 w-screen flex justify-center items-center h-[10vh] bg-gray-800 text-white p-4 text-center text-2xl md:text-3xl"
    >
      {COUNTRY_QUIZ_MASTER.split("").map((char, index) => {
        return (
          <span key={index} className="relative  inline-block -top-50">
            {`${char === " " ? "\u00A0" : char}`}
          </span>
        );
      })}
    </header>
  );
};

export default Header;
