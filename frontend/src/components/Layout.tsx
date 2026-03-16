import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="bg-wall-paper-sm md:bg-wall-paper pl-4 w-screen h-[75vh] bg-no-repeat bg-center bg-cover text-white text-5xl md:text-3xl flex flex-col gap-2 justify-start items-center">
        {children}
      </main>

      {Footer}
    </>
  );
};

export default Layout;
