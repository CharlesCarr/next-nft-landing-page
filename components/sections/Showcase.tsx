import { useRef } from "react";
import ShowcaseItem from "../ShowcaseItem";

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  const sampleItems = [0, 1, 2, 3, 4, 5];

  return (
    <div
      className="min-h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden"
      id="creators"
    >
      <div className="flex flex-col justify-center items-center w-full h-1/3 mb-8">
        <p className="text-3xl font-bold mb-4">Top Creators</p>
        <p className="text-sm text-center font-light">
          Discover the top nft creators <br /> in the world on our site.
        </p>
      </div>

      <div
        className="whitespace-nowrap box-content mx-8 my-0 flex animate-move h-1/3"
        ref={Row1Ref}
      >
        {sampleItems.map((item: any) => (
          <ShowcaseItem key={item} passRef={Row1Ref} />
        ))}
      </div>

      <div
        className="whitespace-nowrap box-content mx-8 my-0 flex animate-reverse h-1/3"
        ref={Row2Ref}
      >
        {sampleItems.map((item: any) => (
          <ShowcaseItem key={item} passRef={Row2Ref} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
