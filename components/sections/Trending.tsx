import NFTCard from "../NFTCard";

const Trending = () => {
  const trendingNFTs = [
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
  ];

  return (
    <div className="w-screen h-screen relative" id="trending">
      <div className="w-screen h-1/2 bg-black"></div>
      <div className="w-screen h-1/2 bg-white"></div>
      <div className="w-3/4 h-5/6 absolute m-auto top-12 right-0 left-0 bottom-0 grid grid-rows-4 grid-cols-5 gap-3">
        <div className="row-start-1 row-end-2 col-start-1 col-end-4 flex justify-start items-start text-white text-3xl font-bold tracking-wider">
          <p>
            Trending Artworks <br /> This Week
          </p>
        </div>

        {/* {trendingNFTs.map((nft: any) => {
          <div className="row-start-2 row-end-3 col-start-1 col-end-2 border border-black">
            <NFTCard {...nft} />
          </div>
        })} */}
        <div className="bg-slate-100 row-start-2 row-end-4 col-start-1 col-end-2 border border-black">
          <NFTCard {...trendingNFTs[0]} />
        </div>
        <div className="bg-slate-100 row-start-2 row-end-4 col-start-2 col-end-3 border border-black">
          <NFTCard {...trendingNFTs[1]} />
        </div>
        <div className="bg-slate-100 row-start-2 row-end-4 col-start-3 col-end-4 border border-black">
          <NFTCard {...trendingNFTs[2]} />
        </div>
        <div className="bg-slate-100 row-start-1 row-end-4 col-start-4 col-end-6 flex justify-center items-center border border-black">
          <NFTCard nft="NFT 4" name="@charlie" price="2 ETH" totalhw="trs-total" tbheight="trs-tb" imgheight="trs-img" background={false} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
