interface NFTCardProps {
  nft: string;
  name: string;
  price: string;
  time: string;
  height: string;
  width: string;
  rotation: string;
  background: boolean;
}

const NFTCard = ({
  nft,
  name,
  price,
  time,
  height,
  width,
  rotation,
  background,
}: NFTCardProps) => {
  return (
    <div
      className={`bg-white ${width} h-[${height}px] flex flex-col justify-center items-center px-3 border-2 border-black ${rotation}`}
    >
        {/* h-[${height/6}px] */}
      <div className={`flex justify-between items-center h-[80px] w-full`}>
        <p className="font-bold text-xl tracking-wider">{nft}</p>
        <p className="text-sm font-light">{name}</p>
      </div>
      {/* h-[${height * 4/6}px] */}
      <div className={`bg-black h-[150px] w-full`}></div>
      {/* h-[${height/6}px] */}
      <div className={`h-[80px] w-full flex justify-between items-center px-4`}>
        <div className="flex flex-col justify-center items-center">
          <p className="font-light text-xs">Current Bid</p>
          <p className="font-semibold text-xs">{price}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-light text-xs">Remaining Time</p>
          <p className="font-semibold text-xs">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
