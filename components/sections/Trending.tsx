import NFTCard from "../NFTCard";

const Trending = () => {
  const trendingNFTs = [
    {
      nft: "PP YACHT 1",
      name: "@tom",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: "fanatic/fanatic-one.png",
      cardType: 'trending-small',
    },
    {
      nft: "LJ SURF 1",
      name: "@mark",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: "lebron/lebron-james-one.png",
      cardType: 'trending-small',
    },
    {
      nft: "TNF M 1",
      name: "@mike",
      price: "1 ETH",
      tbheight: "tl-top-bottom",
      imgheight: "tl-img",
      totalhw: "trs-total",
      background: false,
      img: "thursday/thursday-football-one.png",
      cardType: 'trending-small',
    },
  ];

  return (
    <div className="w-screen h-screen relative" id="trending">
      <div className="w-screen h-1/2 bg-black"></div>
      <div className="w-screen h-1/2 bg-white"></div>
      <div className="w-3/4 h-5/6 absolute m-auto top-12 right-0 left-0 bottom-0 grid grid-rows-4 grid-cols-5 gap-3">
        <div className="row-start-1 row-end-2 col-start-1 col-end-4 flex justify-start items-start text-white text-2xl sm:text-3xl font-bold tracking-wider">
          <p className="w-40 md:w-full">
            Trending Artworks <br /> This Week
          </p>
        </div>

        <div className="bg-slate-100 row-start-2 row-end-4 col-start-1 col-end-3 md:col-end-2 border border-black">
          <NFTCard {...trendingNFTs[0]} />
        </div>
        <div className="bg-slate-100 row-start-2 row-end-4 col-start-2 col-end-3 border border-black hidden md:flex">
          <NFTCard {...trendingNFTs[1]} />
        </div>
        <div className="bg-slate-100 row-start-2 row-end-4 col-start-3 col-end-4 border border-black hidden md:flex">
          <NFTCard {...trendingNFTs[2]} />
        </div>
        <div className="bg-slate-100 row-start-1 row-end-4 col-start-3 md:col-start-4 col-end-6 flex justify-center items-center border border-black">
          <NFTCard
            nft="TB12 C 1"
            name="@charlie"
            price="2 ETH"
            totalhw="trs-total"
            tbheight="trs-tb"
            imgheight="trs-img"
            background={false}
            img="brady/tom-brady-one.png"
            cardType="trending-large"
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
