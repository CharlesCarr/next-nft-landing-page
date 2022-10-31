const Footer = () => {
  return (
    <div className="h-fit w-screen flex flex-col px-20 items-center justify-end">
      <div className="w-full h-40 bg-black flex justify-between items-center px-28">
        <p className="text-3xl font-bold text-white">Join Our Community</p>
        <button className="border border-white text-white">
          Launch Discord
        </button>
      </div>
      <div className="w-full h-fit bg-white flex justify-between items-center pl-28 mt-10 pb-20">
        <div className="w-1/4 h-full">
          <p className="bg-black text-white font-bold text-xl w-14 flex justify-center items-center mb-3">
            Logo
          </p>
          <p className="font-light text-xs w-80 mb-3 tracking-wider leading-6">
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
        <div className="flex w-2/4 h-full">
          <div className="w-1/4">
            <ul className="m-0 p-0">
              <li className="font-bold">All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul className="m-0 p-0">
              <li className="font-bold">All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul className="m-0 p-0">
              <li className="font-bold">All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul className="m-0 p-0">
              <li className="font-bold">All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
              <li>All NFTs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
