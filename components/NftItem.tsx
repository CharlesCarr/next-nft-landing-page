import Image from "next/image";
import React from "react";
// import Phillies from "./images/phillies-test.jpeg";

const NftItem = ({ img = 0, number = 0, price = 0, passRef }: any) => {
  let play = (e: any) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e: any) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <div
      className="w-52 h-16 mx-4 my-4 cursor-pointer border border-black rounded-full text-xs flex items-center justify-center px-4"
      onMouseOver={(e) => pause(e)}
      onMouseOut={(e) => play(e)}
    >
      <div className="h-full w-1/4 flex justify-center items-center">
        <p className="border border-black rounded-full h-10 w-10 flex justify-center items-center">Icon</p>
      </div>

      <div className="h-full w-3/4 flex flex-col justify-center items-center">
        <p className="text-sm font-bold">Creator Name</p>
        <p className="font-light">8,237+ Items</p>
      </div>
    </div>
  );
};

export default NftItem;
