interface NFTCardProps {
  nft: string;
  name: string;
  price: string;
  time?: string;
  tbheight?: string;
  imgheight?: string;
  totalhw: string;
  rotation?: string;
  background: boolean;
  position?: string;
}

const NFTCard = ({
  nft,
  name,
  price,
  time,
  tbheight,
  imgheight,
  totalhw,
  rotation,
  background,
  position,
}: NFTCardProps) => {
  return (
    <div
      className={`bg-white ${totalhw} flex flex-col justify-between items-center px-3 border border-black ${rotation} ${background ? `shadow-4xl absolute ${position}` : null}`}
    >
      <div className={`flex justify-between items-center ${tbheight} w-full`}>
        <p className="font-bold text-xl tracking-wider">{nft}</p>
        <p className="text-sm font-light">{name}</p>
      </div>
      <div className={`bg-black ${imgheight} w-full`}></div>
      <div
        className={`${tbheight} w-full flex justify-between items-center px-4`}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="font-light text-xs">Current Bid</p>
          <p className="font-semibold text-xs">{price}</p>
        </div>
        {time ? (
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-xs">Remaining Time</p>
            <p className="font-semibold text-xs">{time}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NFTCard;
