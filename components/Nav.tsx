import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-20 flex justify-center items-center">
      <div className="border-b-black border-x-0 border w-full mx-20 h-full text-center flex items-center justify-center text-xs tracking-wider">
        <nav className="flex justify-between items-center w-full border-none">
          <p className="text-xl font-bold">Logo</p>

          <span className="hidden">Ham Menu</span>

          <ul className="flex justify-between items-center list-none border-none">
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              Home
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              Trending
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              Collections
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              Creators
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              Community
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100">
              FAQ
            </li>
            <li className="mx-0 my-4 cursor-pointer px-3">
              <div className="hidden">
                <button></button>
              </div>
            </li>
          </ul>

          <div className="text-black px-4 py-2 border border-black hover:shadow-xl cursor-pointer font-bold tracking-widest rounded">
            <button className="tracking-wider">Connect Wallet</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
