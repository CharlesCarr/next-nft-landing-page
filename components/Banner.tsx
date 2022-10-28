import Image from "next/image";
import React from "react";
import Phillies from "./images/phillies-test.jpeg";

const Banner = () => {
  return (
    <div className="bg-slate-900 w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-25">
      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-20">
        <Image width={500} height={400} src={Phillies} alt="test" />
        <Image width={500} height={400} src={Phillies} alt="test" />
        <Image width={500} height={400} src={Phillies} alt="test" />
        <Image width={500} height={400} src={Phillies} alt="test" />
        <Image width={500} height={400} src={Phillies} alt="test" />
        <Image width={500} height={400} src={Phillies} alt="test" />
      </div>

      <h1>
        Join the <br /> NFT club
      </h1>

      <div className="w-[35%] flex justify-end">
        <a
          href="https://www.discord.com"
          aria-label={"Join Now"}
          target="_blank"
          rel="noreferrer"
        >
          <button className="border rounded-2xl cursor-pointer">
            Join Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
