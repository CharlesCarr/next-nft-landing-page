import React from "react";

const Collections = () => {
  return (
    <div className="h-screen w-full px-20">
      <div className="flex w-full h-20 justify-between items-center">
        <p className="text-3xl font-bold">Explore Collections</p>
        <p className="font-light text-xs pr-4">
          Discover the best nft collections <br /> in the world on our site.
        </p>
      </div>
      <div className="flex w-full h-14">
        <ul className="p-0 m-0 w-full flex justify-between items-center">
          <li className="border border-black rounded-2xl px-4 py-1 text-xs">Sport 1</li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs">Sport 2</li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs">Sport 3</li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs">Sport 4</li>
        </ul>
      </div>
      <div className="w-full h-4/6 grid grid-cols-3 gap-3">
        <div className="border border-black">NFT1</div>
        <div className="border border-black">NFT2</div>
        <div className="border border-black">NFT3</div>
        <div className="border border-black">NFT4</div>
        <div className="border border-black">NFT5</div>
        <div className="border border-black">NFT6</div>
      </div>
    </div>
  );
};

export default Collections;
