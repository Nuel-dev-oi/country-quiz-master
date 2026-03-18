import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-1 md:grid-rows-[10vh_87vh_15vh] sm:gap-4 bg-wall-paper-sm md:bg-wall-paper">
      <Header />

      <main className="mb-0 sm:mb-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 ps-2 pe-2 w-screen pb-5 max-[400px]:pb-0 h-[87vh] max-[400px]:h-[75vh] md:gap-4 bg-no-repeat bg-center bg-cover text-white text-5xl md:text-3xl flex flex-col md:grid md:grid-cols-[5vw_1fr_5vw] md:grid-rows-[10%_90%] gap-2 justify-start items-center place-items-center">
        {children}
      </main>

      {Footer}
    </div>
  );
};

export default Layout;
