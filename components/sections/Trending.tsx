import React from "react";

const Trending = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-screen h-1/2 bg-black"></div>
      <div className="w-screen h-1/2 bg-white"></div>
      <div className="w-3/4 h-4/5 absolute m-auto top-0 right-0 left-0 bottom-0 grid grid-rows-3 grid-cols-5 gap-3">
        <div className="row-start-1 row-end-2 col-start-1 col-end-4 flex justify-start items-start text-white text-3xl font-bold tracking-wider"><p>Trending Artworks <br /> This Week</p></div>
        <div className="bg-slate-100 row-start-2 row-end-3 col-start-1 col-end-2 border border-black">nft1</div>
        <div className="bg-slate-100 row-start-2 row-end-3 col-start-2 col-end-3 border border-black">nft2</div>
        <div className="bg-slate-100 row-start-2 row-end-3 col-start-3 col-end-4 border border-black">nft3</div>
        <div className="bg-slate-100 row-start-1 row-end-3 col-start-4 col-end-6 flex justify-center items-center border border-black">nft4big</div>
      </div>
    </div>
  );
};

export default Trending;
