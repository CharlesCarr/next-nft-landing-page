import { useRef } from "react";
import ShowcaseItem from "../ShowcaseItem";

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <div
      className="min-h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden"
      id="showcase"
    >
      <div className="flex flex-col justify-center items-center w-full h-1/3">
        <p className="text-3xl font-bold mb-4">Top Creators</p>
        <p className="font-lighter text-sm">
          Discover the best nft collections in the world on our site.
        </p>
      </div>

      <div
        className="whitespace-nowrap box-content mx-8 my-0 flex animate-move h-1/3"
        ref={Row1Ref}
      >
        <ShowcaseItem img={0} number={0} price={1} passRef={Row1Ref} />
        <ShowcaseItem img={0} number={0} price={1.2} passRef={Row1Ref} />
        <ShowcaseItem img={0} number={0} price={1.4} passRef={Row1Ref} />
        <ShowcaseItem img={0} number={0} price={1.1} passRef={Row1Ref} />
        <ShowcaseItem img={0} number={0} price={1.2} passRef={Row1Ref} />
      </div>

      <div
        className="whitespace-nowrap box-content mx-8 my-0 flex animate-reverse h-1/3"
        ref={Row2Ref}
      >
        <ShowcaseItem img={0} number={0} price={2} passRef={Row2Ref} />
        <ShowcaseItem img={0} number={0} price={0.9} passRef={Row2Ref} />
        <ShowcaseItem img={0} number={0} price={0.8} passRef={Row2Ref} />
        <ShowcaseItem img={0} number={0} price={1.4} passRef={Row2Ref} />
        <ShowcaseItem img={0} number={0} price={1.7} passRef={Row2Ref} />
      </div>
    </div>
  );
};

export default Showcase;
