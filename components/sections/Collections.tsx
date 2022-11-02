import React, { useState, useEffect } from "react";
import NFTCard from "../NFTCard";

const allNFTs = [
  {
    nft: "TB12 C 1",
    fullTitle: "Tom Brady riding a camel through a deck of cards",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "brady/tom-brady-one.png",
    cardType: "collections",
  },
  {
    nft: "TB12 C 2",
    fullTitle: "Tom Brady riding a camel through a deck of cards",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "brady/tom-brady-two.png",
    cardType: "collections",
  },
  {
    nft: "TB12 C 3",
    fullTitle: "Tom Brady riding a camel through a deck of cards",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "brady/tom-brady-three.png",
    cardType: "collections",
  },
  {
    nft: "PP YACHT 1",
    fullTitle: "Philly Phanatic on a Yacht",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "fanatic/fanatic-one.png",
    cardType: "collections",
  },
  {
    nft: "PP YACHT 2",
    fullTitle: "Philly Phanatic on a Yacht",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "fanatic/fanatic-two.png",
    cardType: "collections",
  },
  {
    nft: "PP YACHT 3",
    fullTitle: "Philly Phanatic on a Yacht",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "fanatic/fanatic-three.png",
    cardType: "collections",
  },
  {
    nft: "LBJ SURF 1",
    fullTitle: "Lebron James surfing big waves in Hawaii",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "lebron/lebron-james-one.png",
    cardType: "collections",
  },
  {
    nft: "LBJ SURF 2",
    fullTitle: "Lebron James surfing big waves in Hawaii",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "lebron/lebron-james-two.png",
    cardType: "collections",
  },
  {
    nft: "LBJ SURF 3",
    fullTitle: "Lebron James surfing big waves in Hawaii",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "lebron/lebron-james-three.png",
    cardType: "collections",
  },
  {
    nft: "RB SUB 1",
    fullTitle: "Red Bull Racing Submarine in Space",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "red-bull/red-bull-one.png",
    cardType: "collections",
  },
  {
    nft: "RB SUB 2",
    fullTitle: "Red Bull Racing Submarine in Space",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "red-bull/red-bull-two.png",
    cardType: "collections",
  },
  {
    nft: "RB SUB 3",
    fullTitle: "Red Bull Racing Submarine in Space",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "red-bull/red-bull-three.png",
    cardType: "collections",
  },
  {
    nft: "TNF M 1",
    fullTitle: "Three Musketeers watching Thursday Night Football",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "thursday/thursday-football-one.png",
    cardType: "collections",
  },
  {
    nft: "TNF M 2",
    fullTitle: "Three Musketeers watching Thursday Night Football",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "thursday/thursday-football-two.png",
    cardType: "collections",
  },
  {
    nft: "TNF M 3",
    fullTitle: "Three Musketeers watching Thursday Night Football",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "thursday/thursday-football-three.png",
    cardType: "collections",
  },
  {
    nft: "DoI WS 1",
    fullTitle: "Stealing the Declaration of Independence from the World Series",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "world-series/world-series-one.png",
    cardType: "collections",
  },
  {
    nft: "DoI WS 2",
    fullTitle: "Stealing the Declaration of Independence from the World Series",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "world-series/world-series-two.png",
    cardType: "collections",
  },
  {
    nft: "DoI WS 3",
    fullTitle: "Stealing the Declaration of Independence from the World Series",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "world-series/world-series-three.png",
    cardType: "collections",
  },
];

const sampleNFTs = [
  {
    nft: "TB12 C 1",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "brady/tom-brady-one.png",
    cardType: "collections",
  },
  {
    nft: "PP YACHT 1",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "fanatic/fanatic-one.png",
    cardType: "collections",
  },
  {
    nft: "LBJ SURF 1",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "lebron/lebron-james-one.png",
    cardType: "collections",
  },
  {
    nft: "RB SUB 1",
    name: "@tom",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "red-bull/red-bull-one.png",
    cardType: "collections",
  },
  {
    nft: "TNF M 1",
    name: "@mark",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "thursday/thursday-football-one.png",
    cardType: "collections",
  },
  {
    nft: "DoI WS 1",
    name: "@mike",
    price: "1 ETH",
    tbheight: "tl-top-bottom",
    imgheight: "tl-img",
    totalhw: "trs-total",
    background: false,
    img: "world-series/world-series-one.png",
    cardType: "collections",
  },
];

const Collections = () => {
  const [activeNFTs, setActiveNFTs] = useState<any>(sampleNFTs);
  const [activeFilter, setActiveFilter] = useState<string>("ALL UNIQUE");
  const [showPrompt, setShowPrompt] = useState<any>(null);

  useEffect(() => {
    if (activeFilter !== "ALL UNIQUE") {
      setShowPrompt(activeNFTs[0].fullTitle);
    }
  }, [activeFilter, activeNFTs]);

  const filterNFTs = (selection: any) => {
    // initially active will have 6 unique
    // console.log(selection);
    setActiveFilter(selection);

    // if filter selected, filter the allNFTs array, returning only the selection
    const filteredNFTs = allNFTs.filter((nft: any) => {
      return nft.nft.substring(0, 4) === selection.substring(0, 4);
    });

    // console.log(filteredNFTs);

    // set activeNFTs as that filtered selection
    setActiveNFTs(filteredNFTs);

    // map over activeNFTs to display the cards (in jsx)
  };

  const getAllUniqueNFTs = (selection: any) => {
    setActiveNFTs(sampleNFTs);
    setActiveFilter(selection);
    setShowPrompt(null);
  };

  return (
    <div
      className="h-full min-h-screen w-full px-6 sm:px-10 md:px-20 pt-10"
      id="collections"
    >
      <div className="flex w-full h-20 justify-between items-center">
        <p className="text-3xl font-bold">Explore Collections</p>
        <p className="font-light text-xs pr-4">
          Discover the best nft collections <br /> in the world on our site.
        </p>
      </div>
      <div className="flex w-full h-14 mb-2">
        <ul className="p-0 m-0 w-full flex justify-start items-center">
          <li
            className={`${
              activeFilter === "ALL UNIQUE" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => getAllUniqueNFTs(e.target.innerText)}
          >
            ALL UNIQUE
          </li>
          <li
            className={`${
              activeFilter === "TB12 C" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => filterNFTs(e.target.innerText)}
          >
            TB12 C
          </li>
          <li
            className={`${
              activeFilter === "PP YACHT" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => filterNFTs(e.target.innerText)}
          >
            PP YACHT
          </li>
          <li
            className={`${
              activeFilter === "LBJ SURF" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => filterNFTs(e.target.innerText)}
          >
            LBJ SURF
          </li>
          <li
            className={`${
              activeFilter === "TNF M" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => filterNFTs(e.target.innerText)}
          >
            TNF M
          </li>
          <li
            className={`${
              activeFilter === "RB SUB" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => filterNFTs(e.target.innerText)}
          >
            RB SUB
          </li>
          <li
            className={`${
              activeFilter === "DoI WS" ? "bg-black text-white" : null
            } border border-black rounded-2xl px-2 sm:px-4 py-1 text-xs mr-2 sm:mr-8 cursor-pointer`}
            onClick={(e: any) => filterNFTs(e.target.innerText)}
          >
            DoI WS
          </li>
        </ul>
      </div>

      {showPrompt ? (
        <div className="my-4">
          <p className="font-bold">
            Prompt for AI:{" "}
            <span className="font-light">{`"${showPrompt}"`}</span>
          </p>
        </div>
      ) : null}

      <div className="w-full h-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-6">
        {activeNFTs.map((nft: any) => (
          <NFTCard key={nft.nft} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
