import { useRef } from "react";
import NftItem from "../NftItem";

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden bg-slate-700" id="showcase">
      <div
        className="whitespace-nowrap box-content mx-8 my-0 flex animate-move"
        ref={Row1Ref}
      >
        <NftItem img={0} number={0} price={1} passRef={Row1Ref} />
        <NftItem img={0} number={0} price={1.2} passRef={Row1Ref} />
        <NftItem img={0} number={0} price={1.4} passRef={Row1Ref} />
        <NftItem img={0} number={0} price={1.1} passRef={Row1Ref} />
        <NftItem img={0} number={0} price={1.2} passRef={Row1Ref} />
      </div>

      <div
        className="whitespace-nowrap box-content mx-8 my-0 flex animate-reverse"
        ref={Row2Ref}
      >
        <NftItem img={0} number={0} price={2} passRef={Row2Ref} />
        <NftItem img={0} number={0} price={0.9} passRef={Row2Ref} />
        <NftItem img={0} number={0} price={0.8} passRef={Row2Ref} />
        <NftItem img={0} number={0} price={1.4} passRef={Row2Ref} />
        <NftItem img={0} number={0} price={1.7} passRef={Row2Ref} />
      </div>
    </div>
  );
};

export default Showcase;
