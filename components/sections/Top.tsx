import React from "react";
import NFTCard from "../NFTCard";
import { GiDiamonds } from "react-icons/gi";

const Top = () => {
  const topNFTs = [
    {
      nft: "DoI WS #2",
      name: "@jonah",
      price: "1.7 ETH",
      time: "04 : 10 : 15",
      tbheight: "ts-top-bottom",
      imgheight: "ts-img",
      totalhw: "ts-total",
      rotation: "-rotate-[14deg]",
      background: true,
      position: "bottom-6 right-6 z-0",
      img: 'world-series-one.png',
      cardType: 'top-small',
    },
    {
      nft: "RB Sub #1",
      name: "@mark",
      price: "1.0234 ETH",
      time: "03 : 08 : 15",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "tl-total",
      rotation: "rotate-[10deg]",
      background: true,
      img: 'red-bull-one.png',
      cardType: 'top-large',
    },
  ];
  return (
    // calc height for this as 100vh - nav height (in global css)
    <div
      className="bg-white w-full flex flex-col items-center justify-center"
      id="home"
    >
      <div className="w-full h-3/4 flex justify-center items-center">
        <div className="w-full sm:w-1/2 h-full flex flex-col justify-start sm:justify-center items-start pl-12 sm:pl-18 lg:pl-24 xl:pl-52 relative">
          <div className="relative">
            <GiDiamonds className="h-16 w-16 absolute bottom-32 -right-10 sm:bottom-20 sm:right-8" />
            <GiDiamonds className="h-8 w-8 absolute bottom-24 -right-14 sm:right-4 sm:bottom-12" />
            <p className="text-5xl font-bold mb-4 tracking-wider">
              Collect Super <br /> Rare Digital
              <br /> Artworks
            </p>
            <p className="mb-4 font-light text-sm">
              Discover the best nft collections <br /> in the world on our site.
            </p>
            <button className="ml-1 mt-1">
              <a
                href="#collections"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white text-sm">
                  Explore
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="w-1/2 h-full flex-col justify-center items-center mr-3 sm:mr-6 md:mr-24 lg:mr-52 relative pt-10 hidden sm:flex">
          {topNFTs.map((nft) => (
            <NFTCard key={nft.nft} {...nft} />
          ))}
        </div>
      </div>

      <div className="bg-white w-full  flex justify-start items-center pl-12 sm:pl-18 lg:pl-24 xl:pl-52">
        <div className="pr-4 flex flex-col justify-center items-center mr-4">
          <p className="font-bold text-3xl">30k+</p>
          <p className="text-xs font-light">Artwork</p>
        </div>
        <div className="pr-4 flex flex-col justify-center items-center mr-4">
          <p className="font-bold text-3xl">10k+</p>
          <p className="text-xs font-light">Auction</p>
        </div>
        <div className="flex flex-col justify-center items-center mr-4">
          <p className="font-bold text-3xl">20k+</p>
          <p className="text-xs font-light">Artist</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
