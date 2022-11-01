import React from "react";
import NFTCard from "../NFTCard";

const Collections = () => {
  const sampleNFTs = [
    {
      nft: "NFT 1",
      name: "@tom",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: 'brady/tom-brady-one.png',
    },
    {
      nft: "NFT 2",
      name: "@mark",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: 'fanatic/fanatic-one.png'
    },
    {
      nft: "NFT 3",
      name: "@mike",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: 'lebron/lebron-james-one.png',
    },
    {
      nft: "NFT 4",
      name: "@tom",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: 'red-bull/red-bull-one.png',
    },
    {
      nft: "NFT 5",
      name: "@mark",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: 'thursday/thursday-football-one.png',
    },
    {
      nft: "NFT 6",
      name: "@mike",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: 'world-series/world-series-one.png'
    },
  ];

  return (
    <div className="h-full min-h-screen w-full px-6 sm:px-10 md:px-20 pt-10" id="collections">
      <div className="flex w-full h-20 justify-between items-center">
        <p className="text-3xl font-bold">Explore Collections</p>
        <p className="font-light text-xs pr-4">
          Discover the best nft collections <br /> in the world on our site.
        </p>
      </div>
      <div className="flex w-full h-14 mb-2">
        <ul className="p-0 m-0 w-full flex justify-start items-center">
          <li className="border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8">
            Sport 1
          </li>
          <li className="border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8">
            Sport 2
          </li>
          <li className="border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8">
            Sport 3
          </li>
          <li className="border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8">
            Sport 4
          </li>
          <li className="border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8">
            Sport 5
          </li>
          <li className="border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs">
            Sport 6
          </li>
        </ul>
      </div>
      <div className="w-full h-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-6">
        {sampleNFTs.map((nft: any) => <NFTCard key={nft} {...nft} />)}
      </div>
    </div>
  );
};

export default Collections;
