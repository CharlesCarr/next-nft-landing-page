const Footer = () => {
  return (
    <div className="h-fit w-screen flex flex-col items-center justify-end" id="community">
      <div className="w-full h-44 bg-black flex justify-between items-center px-8 sm:px-32">
        <p className="text-xl sm:text-3xl font-bold text-white">Join Our Community</p>
         <button>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group text-xs sm:text-base"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-black border border-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-white group-hover:bg-black group-hover:border-white"></span>
              <span className="relative text-black group-hover:text-white">
                Launch Discord
              </span>
            </a>
          </button>
      </div>
      <div className="w-full h-fit bg-white flex justify-between items-center pl-6 sm:pl-12 md:pl-32 mt-10 pb-5 sm:pb-20">
        <div className="w-1/4 h-full">
          <p className="bg-black text-white font-bold text-xl w-14 flex justify-center items-center mb-3">
            drops
          </p>
          <p className="font-light text-xs w-40 md:w-80 mb-3 md:tracking-wider md:leading-6">
            The worlds first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <ul className="flex p-0 m-0 text-xs justify-start items-center">
            <li className="border border-black rounded-full h-8 w-8 mr-2 flex justify-center items-center">
              fb
            </li>
            <li className="border border-black rounded-full h-8 w-8 mr-2 flex justify-center items-center">
              li
            </li>
            <li className="border border-black rounded-full h-8 w-8 flex justify-center items-center">
              tw
            </li>
          </ul>
        </div>
        <div className="flex w-2/4 h-full pr-8 sm:pr-16">
          <div className="w-1/4 mr-12 sm:mr-0">
            <ul className="m-0 p-0">
              <li className="font-bold mb-6 text-xs sm:text-sm sm:tracking-wider">Marketplace</li>
              <li className="font-light text-xs mb-4">All NFTs</li>
              <li className="font-light text-xs mb-4">Collectibles</li>
              <li className="font-light text-xs mb-4">Photography</li>
              <li className="font-light text-xs mb-4">Trading Cards</li>
            </ul>
          </div>
          <div className="w-1/4 hidden sm:flex">
            <ul className="m-0 p-0">
              <li className="font-bold mb-6 text-xs sm:text-sm sm:tracking-wider">Statistics</li>
              <li className="font-light text-xs mb-4">Rankings</li>
              <li className="font-light text-xs mb-4">Activity</li>
            </ul>
          </div>
          <div className="w-1/4 hidden sm:flex">
            <ul className="m-0 p-0">
              <li className="font-bold mb-6 text-xs sm:text-sm sm:tracking-wider">Resources</li>
              <li className="font-light text-xs mb-4">Help Center</li>
              <li className="font-light text-xs mb-4">Partners</li>
              <li className="font-light text-xs mb-4">Docs</li>
              <li className="font-light text-xs mb-4">Newsletter</li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul className="m-0 p-0">
              <li className="font-bold mb-6 text-xs sm:text-sm sm:tracking-wider">Company</li>
              <li className="font-light text-xs mb-4">About Us</li>
              <li className="font-light text-xs mb-4">Careers</li>
              <li className="font-light text-xs mb-4">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
