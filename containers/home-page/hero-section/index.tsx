import React from "react";
import BrainImage from "../../../assets/images/image_brain.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import Card from "@/components/Card/Card";

const HeroSection = () => {
  return (
    <div className="flex h-screen items-center ">
      <div className="flex-cols ">
        <div className="flex items-center gap-10 ">
          <div className="w-[60%]">
            <h2 className=" font-powerGrotesk text-[#666666] ">
              Your Journey to Tomorrow Begins Here
            </h2>
            <h1 className=" font-sulphurPoint">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <h4 className=" font-neueMachina text-[#666666] ">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </h4>

            <SearchBar />
          </div>

          <div className="w-[40%]">
            <img src={BrainImage.src} alt="" />
          </div>
        </div>

          <Card />
      </div>
    </div>
  );
};

export default HeroSection;
