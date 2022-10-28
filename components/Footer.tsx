import React from "react";
import Banner from "./Banner";

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="bg-slate-300 text-white min-h-screen w-screen relative flex flex-col">
      <Banner />

      <div className="w-3/4 mx-8 my-auto flex justify-between items-center border-b">
        <div className="flex flex-col justify-center items-center">
          <p>Logo</p>

          <div className="flex items-center mx-4 my-auto">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              Facebook
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              Facebook
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              Facebook
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              Facebook
            </a>
          </div>
        </div>

        <ul className="list-none w-50% grid grid-cols-2 grid-rows-3 gap-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Roadmap</li>
          <li className="cursor-pointer">Team</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Showcase</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
      </div>

      <div className="w-3/4 mx-0 my-auto flex justify-between items-center text-sm">
        <span>
          &copy; {new Date().getFullYear()} NFT Club. All rights reserved.
        </span>
        <span>
          Built by Charlie Carr
        </span>
      </div>
    </div>
  );
};

export default Footer;
