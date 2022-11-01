import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-20 flex justify-center items-center">
      <div className="border-b-black border-x-0 border w-full mx-20 h-full text-center flex items-center justify-center text-xs tracking-wider">
        <nav className="flex justify-between items-center w-full border-none">
          <p className="text-xl font-bold">logo</p>

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

          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-black bg-white border border-gray-200 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Connect Wallet
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
