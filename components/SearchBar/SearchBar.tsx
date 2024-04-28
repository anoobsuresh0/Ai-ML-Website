"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex w-[70%] h-[56px] items-center p-4 bg-white text-black mt-4 rounded-2xl relative">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 mx-4" />
      <input
        type="text"
        id="inputId"
        placeholder="Explore Your Imagination..."
        className="bg-[transparent] font-neueMachina outline-none border-none w-full py-3 pl-2 pr-3 mr-4"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {searchQuery && (
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 focus:outline-none"
          onClick={clearSearch}
        >
          <XCircleIcon className="h-6 w-6 text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
