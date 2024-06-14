"use client";
import React, { useEffect, useState } from "react";
import BrainImage from "../../../assets/images/image_brain.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardGroup from "@/components/Card/CardGroup";
import { ModelViewer } from "@/components/Model/ModelViewer";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-auto mt-[130px] mb-[200px] items-center">
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start lg:gap-10">
        <div className="lg:w-[60%] flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-powerGrotesk text-[#666666]">
              Your Journey to Tomorrow Begins Here
            </h2>
            <h1 className="font-sulphurPoint text-left">
              Explore the Frontiers of Artificial Intelligence
            </h1>
          </div>

          <h4 className=" sm:hidden lg:block md:block font-neueMachina text-[#666666]">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </h4>

          <SearchBar onChange={handleSearchChange} />
        </div>
        {/* <ModelViewer /> */}

        <div className="sm:hidden lg:block lg:w-[40%] justify-center">
          <img
            src={BrainImage.src}
            alt="Brain Image"
            className="w-full lg:w-auto"
          />
        </div>
      </div>

      {searchQuery && (
        <div className="w-full mt-10 lg:mt-10">
          <CardGroup blogPosts={filteredPosts} />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
