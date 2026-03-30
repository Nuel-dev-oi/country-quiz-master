import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
const Layout: React.FC<{
  children: React.ReactNode;
  isFinished: boolean;
  score: number;
}> = ({ children, isFinished, score }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-1 md:grid-rows-[10vh_87vh_15vh] sm:gap-4 bg-wall-paper-sm md:bg-wall-paper bg-no-repeat bg-center bg-cover min-h-screen bg-blue-950">
      <Header isFinished={isFinished} score={score} />

      <main className="relative sm:static md:mb-0 mb-5 max-[400px]:mb-0 sm:mb-4 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 ps-2 pe-2 w-screen pb-5 max-[400px]:pb-0 h-[87vh] max-[400px]:h-[75vh] md:gap-4 bg-no-repeat bg-center bg-cover text-white text-5xl md:text-3xl flex flex-col sm:grid sm:grid-cols-[5vw_1fr_5vw] sm:grid-rows-[10%_90%_max] gap-2 justify-start items-center place-items-center">
        {children}
      </main>

      {Footer}
    </div>
  );
};

export default Layout;
