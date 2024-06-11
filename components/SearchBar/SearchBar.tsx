import React from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onChange(query);
  };

  return (
    <div className="flex lg:w-[70%] h-[56px] items-center p-4 bg-white text-black mt-4 rounded-2xl relative">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 mx-4" />
      <input
        type="text"
        id="inputId"
        placeholder="Explore Your Imagination..."
        className="bg-[transparent] font-neueMachina outline-none border-none w-full py-3 pl-2 pr-3 mr-4"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
