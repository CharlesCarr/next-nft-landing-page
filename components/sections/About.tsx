import Typewriter from "typewriter-effect";
import { SlPicture } from "react-icons/sl";

const About = () => {
  return (
    <div className="bg-black md:h-screen min-h-screen w-full flex flex-col md:flex-row justify-center items-center px-16 md:px-24 py-20 text-white" id="about">
      <div className="flex flex-row md:flex-col items-center justify-center h-72 md:h-full w-full md:w-1/3 border border-white">
        <div className="flex flex-col items-center justify-center h-full md:h-1/2 w-full border px-2 sm:px-6">
          <p className="mb-2 sm:mb-4 font-bold text-base sm:text-2xl">What is an <span className="text-green-300">NFT</span>{" "}?</p>
          <p className="text-xs sm:text-sm text-center leading-6">
            NFT stands for non-fungible token. NFTs are tokens that we can use
            to represent ownership of unique items. They let us tokenize things
            like art, collectibles, even real estate.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-full md:h-1/2 w-full border py-10">
          <div className="flex flex-col justify-center items-center">
            <div className="flex mb-5 text-xs sm:text-base">
              <p>Generating AI Images</p>
              <Typewriter
                options={{
                  strings: ["..."],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </div>
            <SlPicture className="w-12 h-12 sm:w-24 sm:h-24" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start h-full w-full md:w-2/3 border border-white">
        <div className="flex flex-col items-center justify-center h-3/4 w-full border border-white px-8 sm:px-16 py-6">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-6">About Our Collections</p>
          <p className="tracking-wide leading-8 text-center text-sm md:text-base">
            Our NFT collection is fictional for the purpose of creating this
            landing page. These images were created with AI using{" "}
            <a
              href="https://www.starryai.com/"
              target="_blank"
              rel="noreferrer"
              className="text-green-300 cursor-pointer"
            >
              StarryAI
            </a>
            , an AI art generator app, where you can enter a prompt and their AI
            transforms it into a work of art. Our NFT collections were based on
            their Impressionist style with sports themed prompts with some
            random twists to see what the AI would come up with. Enjoy!
          </p>
        </div>

        <div className="border h-32 md:h-1/4 w-full flex justify-center items-center">
          <div className="bg-white text-black shadow-inner rounded-2xl px-6 py-2 text-sm w-3/4 text-center">
            <Typewriter
              options={{
                strings: [
                  "Lebron surfing big waves in Hawaii",
                  "Philly phanatic on a yacht",
                  "Red Bull Racing Submarine in Space",
                  "Stealing the Declaration of Independence from the World Series",
                  "Tom Brady riding a camel through a deck of cards",
                  "Three Musketeers watching Thursday Night Football",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
