import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Accordion from "../Accordion";

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      // ScrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      id="faq"
      className="min-h-screen h-auto w-screen bg-slate-900 relative overflow-hidden flex justify-center items-center flex-col text-slate-300"
    >
      <h1>FAQ</h1>

      <div className="w-3/4 mx-2 my-auto flex justify-between content-center">
        <div className="w-[45%]">
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHERE CAN I VIEW MY NFTS?"
          >
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT IS THE METAVERSE?"
          >
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHY DO WE NEED ROYALTIES?"
          >
            The amount of royalties was fixed at 5% to finance the Weirdos
            Clubs projects. We have the ambition to organize multiple events
            around the world in order to strengthen the community and build a
            network of entrepreneurs and investors with the same mindset and
            common interests.
          </Accordion>
        </div>
        <div>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="HOW CAN I USE MY NFT?"
          >
            You will be able to use your NFT as an avatar in the Metaverse and
            our future video game. Holding also means that you are part of an
            exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT ARE THE WEIRDOS?
"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT IS THE FUSION PROCESS?
"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim
            veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem,
            maxime, similique neque minus aliquam dolore doloremque laboriosam,
            facilis quibusdam unde sint officia.
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
