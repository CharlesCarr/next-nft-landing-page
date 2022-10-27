import Image from "next/image";
import React from "react";
import Phillies from "./images/phillies-test.jpeg";

const NftItem = ({ img = 0, number = 0, price = 0, passRef }: any) => {
  let play = (e: any) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e: any) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <div className="w-60 mx-0 my-4 rounded cursor-pointer" onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }>
      <Image width={500} height={400}  src={Phillies} alt="NFT" />

      <div className="flex justify-between px-[0.8rem] py-4 border-2 rounded-b bg-white">
        <div>
          <span>NFT</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <div className="flex justify-start items-center">
            {/* <Image /> */}
            <p>ETH</p>
            <h1>{Number(price).toFixed(1)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItem;
