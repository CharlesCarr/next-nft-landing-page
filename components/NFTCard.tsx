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
    <div className="relative h-full w-full">
      {background ? (
        <div
          className={`bg-black w-[${width}] h-[${height}] absolute -left-3 top-3 ${rotation}`}
        ></div>
      ) : null}
      <div
        className={`bg-white w-[${width}] h-[${height}] flex flex-col justify-center items-center px-3 border-2 border-black ${rotation}`}
      >
        <div className="flex justify-between items-center h-1/6 w-full">
          <p className="font-bold text-xl tracking-wider">{nft}</p>
          <p className="text-sm font-light">{name}</p>
        </div>
        <div className="bg-black h-4/6 w-full"></div>
        <div className="h-1/6 w-full flex justify-between items-center px-4">
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
    </div>
  );
};

export default NFTCard;
