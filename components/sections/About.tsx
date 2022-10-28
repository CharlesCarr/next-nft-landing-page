import React from "react";
import Carousel from "../Carousel";

const About = () => {
  return (
    <div className="bg-slate-600 w-full h-[100vh] flex justify-center items-center relative overflow-hidden text-white">
      <div className="w-3/4 mx-0 my-auto flex justify-center items-center">
        <div className="w-1/2 h-full min-h-[60vh] flex flex-col items-center justify-center">
          <Carousel />
        </div>

        <div className="w-3/4 mx-0 my-auto flex flex-col justify-center items-center">
          <h2>Welcome to the club....</h2>
          <p>Description....</p>
          <p>More description...</p>

          <button className="bg-slate-200 text-black rounded-2xl px-4 py-2">Join Our Discord</button>
        </div>
      </div>
    </div>
  );
};

export default About;
