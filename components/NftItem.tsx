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
      className="w-52 h-14 mx-4 my-4 cursor-pointer border border-black rounded-full flex text-xs"
      onMouseOver={(e) => pause(e)}
      onMouseOut={(e) => play(e)}
    >
      <div className="h-full w-1/4">
        <p className="">Icon</p>
      </div>

      <div className="h-full w-3/4">
        <p>Creator Name</p>
        <p>8,237+ Items</p>
      </div>
    </div>
  );
};

export default NftItem;
