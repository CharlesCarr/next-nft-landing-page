import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const HamburgerMenu = ({ showHamMenu, setShowHamMenu }: any) => {
  return (
    <section className="fixed inset-y-0 right-0 z-50 flex sm:hidden">
      <div className="w-screen max-w-sm h-full">
        <div className="flex h-full flex-col  bg-black">
          <div className="overflow-y-scroll">
            <header className="flex items-center justify-between pl-6">
              <span className="text-sm font-medium uppercase tracking-widest text-white">
                Menu
              </span>

              <button
                aria-label="Close menu"
                className="h-16 w-16 border-l border-gray-900 text-white"
                type="button"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                <FaRegWindowClose className="h-8 w-8" />
              </button>
            </header>

            <nav className="h-5/6 flex flex-col justify-between items-center text-3xl font-medium text-gray-50 px-10 mt-10">
              <a
                href="#home"
                className="px-6 py-3 border border-black hover:border-white w-full rounded-2xl mb-5"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="#trending"
                className="px-6 py-3 border border-black hover:border-white w-full rounded-2xl mb-5"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                {" "}
                Trending{" "}
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-black hover:border-white w-full rounded-2xl mb-5"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#collections"
                className="px-6 py-3 border border-black hover:border-white w-full rounded-2xl mb-5"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                {" "}
                Collections{" "}
              </a>
              <a
                href="#creators"
                className="px-6 py-3 border border-black hover:border-white w-full rounded-2xl mb-5"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                {" "}
                Creators{" "}
              </a>
              <a
                href="#community"
                className="px-6 py-3 border border-black hover:border-white w-full rounded-2xl mb-5"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                {" "}
                Community{" "}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HamburgerMenu;
