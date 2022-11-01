import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [showToast, setShowToast] = useState(false);
  const [showHamMenu, setShowHamMenu] = useState<boolean>(false);

  return (
    <div className="w-full h-20 flex justify-center items-center">
      {showToast ? (
        <div className="absolute top-24 right-20 border border-black text-xs px-4 py-2 w-60 flex items-center justify-between rounded-2xl">
          <p>Sample site, no wallet needed!</p>
          <IoMdClose
            className="w-4 h-4 cursor-pointer"
            onClick={() => setShowToast(!showToast)}
          />
        </div>
      ) : null}
      <div className="border-b-black border-x-0 border-t-0 border w-full mx-10 md:mx-18 lg:mx-20 h-full text-center flex items-center justify-center text-xs tracking-wider">
        <nav className="flex justify-between items-center w-full border-none">
          <p className="text-xl font-bold">drops</p>

          <ul className="hidden md:flex justify-between items-center list-none border-none">
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              <a href="#trending">Trending</a>
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              <a href="#collections">Collections</a>
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100 mr-6">
              <a href="#creators">Creators</a>
            </li>
            <li className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition hover:before:scale-100">
              <a href="#community">Community</a>
            </li>
          </ul>

          <div className="flex">
            <button onClick={() => setShowToast(!showToast)}>
              <a
                // href="#_"
                className="relative px-3 sm:px-5 py-2 sm:py-3 overflow-hidden font-medium text-black bg-white border border-gray-200 shadow-inner group mr-4 sm:mr-0"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease "></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease "></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease "></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease "></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Connect Wallet
                </span>
              </a>
            </button>

            <span
              className="flex md:hidden border rounded-full p-2 shadow-inner cursor-pointer"
              onClick={() => setShowHamMenu(!showHamMenu)}
            >
              <GiHamburgerMenu className="w-4 h-4" />
            </span>

            {showHamMenu && (
              <HamburgerMenu
                showHamMenu={showHamMenu}
                setShowHamMenu={setShowHamMenu}
              />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
