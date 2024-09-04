import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex flex-between fix4ed z-50 w-full bg-default-1 px-6 py-3 lg:px-10 max-sm:py-6">
      <Link
        href="/"
        className="flex items-center gap-1 max-lg:justify-center  sm:hidden  justify-center w-full"
      >
        <Image
          src={"/icons/logo-black.svg"}
          width={32}
          height={32}
          alt={"LookUp"}
          className="max-sm:size-10"
        />
        <p className="text-white font-bold text-[26px] ">LookUp</p>
      </Link>
      <div className="flex flex-between gap-5 sm:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
