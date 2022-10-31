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
    },
    {
      nft: "NFT 2",
      name: "@mark",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
    },
    {
      nft: "NFT 3",
      name: "@mike",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
    },
    {
      nft: "NFT 4",
      name: "@tom",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
    },
    {
      nft: "NFT 5",
      name: "@mark",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
    },
    {
      nft: "NFT 6",
      name: "@mike",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
    },
  ];

  return (
    <div className="h-screen w-full px-20">
      <div className="flex w-full h-20 justify-between items-center">
        <p className="text-3xl font-bold">Explore Collections</p>
        <p className="font-light text-xs pr-4">
          Discover the best nft collections <br /> in the world on our site.
        </p>
      </div>
      <div className="flex w-full h-14">
        <ul className="p-0 m-0 w-full flex justify-start items-center">
          <li className="border border-black rounded-2xl px-4 py-1 text-xs mr-8">
            Sport 1
          </li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs mr-8">
            Sport 2
          </li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs mr-8">
            Sport 3
          </li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs mr-8">
            Sport 4
          </li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs mr-8">
            Sport 5
          </li>
          <li className="border border-black rounded-2xl px-4 py-1 text-xs">
            Sport 6
          </li>
        </ul>
      </div>
      <div className="w-full h-4/6 grid grid-cols-3 gap-3">
        {sampleNFTs.map((nft: any) => <NFTCard key={nft} {...nft} />)}
      </div>
    </div>
  );
};

export default Collections;
