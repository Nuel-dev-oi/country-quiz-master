import React from "react";

const Footer: React.JSX.Element = (
  <footer className="h-[15vh] bg-gray-800 text-white p-4 text-center text-sm">
    &copy; {new Date().getFullYear()} Country Quiz Master. All rights reserved.
    <br />
    Created by Okoro Emmanuel.
  </footer>
);
export default Footer;
