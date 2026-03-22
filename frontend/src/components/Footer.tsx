import React from "react";

const Footer: React.JSX.Element = (
  <footer className="sm:h-full md:row-start-3 md:row-end-4 h-[15vh] bg-gray-800 text-white p-4 text-center text-sm md:col-start-1 md:col-end-2">
    &copy; {new Date().getFullYear()} Country Quiz Master. All rights reserved.
    <br />
    Created by Okoro Emmanuel.
  </footer>
);
export default Footer;
