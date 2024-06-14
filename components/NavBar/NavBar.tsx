import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="w-screen flex justify-between items-center h-[80px]  bg-black text-white lg:px-24 sm:px-4 sticky top-0">
      <div className="space-x-10">
        <Link href="/">
          <img src={Logo.src} className="h-10" alt="logo" />
        </Link>
        {/* <Link
          href="/blog"
          className="flex border border-white h-[50px] w-[150px] rounded-[20px] items-center justify-center font-neueMachina hover:bg-lightGray  hover:border-black transition duration-300"
        >
          Blog
        </Link> */}
      </div>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
