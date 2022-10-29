import React from "react";

const NFTCard = () => {
  return (
    <div className="w-1/2 h-5/6 flex flex-col justify-center items-center px-3 border-2 border-black ">
      <div className="flex justify-between items-center h-1/6 w-full">
        <p className="font-bold text-xl tracking-wider">Monkey #2</p>
        <p className="text-sm font-light">@mark</p>
      </div>
      <div className="bg-black h-4/6 w-full"></div>
      <div className="h-1/6 w-full flex justify-between items-center px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="font-light text-xs">Current Bid</p>
          <p className="font-semibold text-xs">1.0234 ETH</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-light text-xs">Remaining Time</p>
          <p className="font-semibold text-xs">03 : 08 : 15</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
