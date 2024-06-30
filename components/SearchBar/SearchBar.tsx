import React from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onChange(query);
  };

  return (
    <div className="flex lg:w-[70%] h-[60px] items-center p-4 pr-2 bg-white text-black mt-4 rounded-2xl relative">
      <input
        type="text"
        id="inputId"
        placeholder="Explore Your Imagination..."
        className="bg-[transparent] font-neueMachina outline-none border-none w-full py-3 pl-2 pr-3 mr-4"
        onChange={handleInputChange}
      />
      <button className="flex items-center justify-center bg-gradient-to-r from-[#45DCA3] to-[#169581] h-[50px] w-[55px] rounded-2xl transition-transform duration-300 transform hover:scale-110  ">
        <MagnifyingGlassIcon className=" text-black p-[9px]" />
      </button>
    </div>
  );
};

export default SearchBar;
