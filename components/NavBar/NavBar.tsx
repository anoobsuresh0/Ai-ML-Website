import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-screen  h-[50px] text-white px-[96px] mt-4">
      <div className="flex justify-between items-center space-x-10">
        <Link href="/">Logo</Link>
        <Link
          href="/blog"
          className="flex border border-white h-[50px] w-[150px] rounded-[20px] items-center justify-center font-neueMachina hover:bg-lightGray  hover:border-black transition duration-300"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
