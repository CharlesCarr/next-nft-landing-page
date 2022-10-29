import React from "react";
import NFTCard from "./NFTCard";

const Top = () => {
  return (
    // calc height for this as 100vh - nav height (in global css)
    <div
      className="bg-white w-full flex flex-col items-center justify-center"
      id="home"
    >
      <div className="w-full h-3/4 flex justify-center items-center border border-black">
        <div className="w-1/2 h-full flex flex-col justify-center items-start border pl-20">
          <p className="text-4xl font-bold mb-4 tracking-wider">
            Collect Super <br /> Rare Digital
            <br /> Artworks
          </p>
          <p className="mb-4 font-light text-sm">
            Discover the best nft collections in the world on our site.
          </p>
          <button>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Explore
              </span>
            </a>
          </button>

          {/* <button className="border px-3 py-1">Explore</button> */}
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center items-center border">
          <NFTCard
            nft={"Monkey #2"}
            name={"@mark"}
            price={"1.0234 ETH"}
            time={"03 : 08 : 15"}
            // 150
            height={"400"}
            // 250
            width={"test"}
            rotation={"rotate-6"}
            background={true}
          />
        </div>

        {/* <div className="absolute bottom-8 right-[90%] w-28 h-28 border rounded-full">
          <span className="w-14 h-14 flex justify-center items-center rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-100 text-black">
          &#x2193;
          </span>
          {/* <Image width={500} height={400} src={'test'} alt="NFT"></Image> */}

        {/* </div>  */}
      </div>

      <div className="bg-white w-full border border-black flex justify-start items-center pl-20">
        <div className="pr-4">
          <p className="font-bold">30k+</p>
          <p className="text-xs">Artwork</p>
        </div>
        <div className="pr-4">
          <p className="font-bold">30k+</p>
          <p className="text-xs">Artwork</p>
        </div>
        <div>
          <p className="font-bold">30k+</p>
          <p className="text-xs">Artwork</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
