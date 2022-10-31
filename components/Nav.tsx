import React from "react";

const Nav = () => {
  return (
    <div className="bg-white border-b-black border w-full h-20 text-center flex items-center justify-center text-xs tracking-wider">
      <nav className="flex justify-between items-center w-full mx-20">
        <p className="text-xl font-bold">Logo</p>

        <span className="hidden">Ham Menu</span>

        <ul className="flex justify-between items-center list-none">
          <li className="mx-0 my-4 cursor-pointer px-3">Home</li>
          <li className="mx-0 my-4 cursor-pointer px-3">About</li>
          <li className="mx-0 my-4 cursor-pointer px-3">Roadmap</li>
          <li className="mx-0 my-4 cursor-pointer px-3">Showcase</li>
          <li className="mx-0 my-4 cursor-pointer px-3">Team</li>
          <li className="mx-0 my-4 cursor-pointer px-3">FAQ</li>
          <li className="mx-0 my-4 cursor-pointer px-3">
            <div className="hidden">
              <button></button>
            </div>
          </li>
        </ul>

        <div className="bg-slate-300 text-black px-4 py-2 rounded-3xl">
          <button>Connect Wallet</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
