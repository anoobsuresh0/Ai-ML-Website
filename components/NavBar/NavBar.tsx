import Link from "next/link";
import React from "react";
import Logo from "../../assets/images/logo.png";
import BlogLogo from "../../assets/images/blogLogo.png";

const NavBar = () => {
  return (
    <div className="w-screen flex justify-between items-center h-[80px]  bg-black text-white lg:px-24 sm:px-4 sticky top-0">
      <div className=" flex justify-between items-center w-full space-x-10">
        <Link href="/">
          <img src={Logo.src} className="h-10" alt="logo" />
        </Link>

        <Link href="/blog" className="flex justify-center items-center gap-4 ">
          <h3 className=" font-neueMachina sm:hidden lg:block md:block ">
            Blog
          </h3>
          <img
            src={BlogLogo.src}
            alt="blog"
            className="h-6 lg:hidden md:hidden sm:block "
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
