import React from "react";
import BrainImage from "../../../assets/images/image_brain.png"

const HeroSection = () => {
  return (
    <div className="flex items-center h-screen  ">
      <div className="w-[60%]" >
        <h2 className=" font-powerGrotesk text-[30px] text-[#666666] ">
          Your Journey to Tomorrow Begins Here
        </h2>
        <h1 className=" font-sulphurPoint">
          Explore the Frontiers of Artificial Intelligence
        </h1>
        <h3 className=" font-neueMachina text-[18px] text-[#666666] ">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future. Join us on this visionary expedition into the heart of AI.
        </h3>
      </div>

      <div className="w-[40%]" >
       <img src={BrainImage.src} alt="" />
      </div>
      
    </div>
  );
};

export default HeroSection;
