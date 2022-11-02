import Image from "next/image";
import { useEffect, useState } from "react";
interface NFTCardProps {
  nft: string;
  fullTitle?: string;
  name: string;
  price: string;
  time?: string;
  tbheight?: string;
  imgheight?: string;
  totalhw: string;
  rotation?: string;
  background: boolean;
  position?: string;
  img: string;
  cardType: string;
}

const NFTCard = ({
  nft,
  fullTitle,
  name,
  price,
  time,
  tbheight,
  imgheight,
  totalhw,
  rotation,
  background,
  position,
  img,
  cardType,
}: NFTCardProps) => {
  const [cardDimensions, setCardDimensions] = useState<any>({
    width: "260",
    height: "300",
  });
  /*
    Based on cardType can determine the necessary h/w of the Image component ??
  */
 console.log(fullTitle);

  useEffect(() => {
    if (cardType === "collections") {
      setCardDimensions({
        width: "250",
        height: "250",
      });
    } else if (cardType === "trending-small") {
      setCardDimensions({
        width: "260",
        height: "300",
      });
    } else if (cardType === "trending-large") {
      setCardDimensions({
        width: "310",
        height: "280",
      });
    } else if (cardType === "top-large") {
      setCardDimensions({
        width: "360",
        height: "300",
      });
    } else if (cardType === "top-small") {
      setCardDimensions({
        width: "260",
        height: "300",
      });
    }
  }, []);

  return (
    <div
      className={`bg-white ${totalhw} flex flex-col justify-between items-center px-6 border border-black ${
        cardType === "collections" ? "hover:shadow-4xl" : null
      } ${rotation} ${background ? `shadow-4xl absolute ${position}` : null} `}
    >
      <div className={`flex justify-between items-center ${tbheight} w-full`}>
        <p className="font-bold text-xl tracking-wider">{nft}</p>
        <p className="text-sm font-light">{name}</p>
      </div>
      <div className={`${imgheight} w-full flex justify-center items-center`}>
        <Image
          src={`/images/${img}`}
          alt="nft image"
          width={cardDimensions.width}
          height={cardDimensions.height}
        />
      </div>
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
        {/* {cardType === "collections" ? (
          <div className="flex flex-col justify-center items-center">
          <p className="font-light text-xs">AI Prompt:</p>
          <p className="font-semibold text-xs w-24">{`"${fullTitle}"`}</p>
        </div>
        ): null} */}
      </div>
    </div>
  );
};

export default NFTCard;
