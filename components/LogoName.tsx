import React from "react";
import { Poppins } from "next/font/google";

import Image from "next/image";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const LogoName = () => {
  return (
    <div className="flex flex-row">
      <Image
        src={"/icons/logo-black.svg"}
        width={48}
        height={48}
        alt={"LookUp"}
        className="max-sm:size-10"
      />
      <h1
        className={cn(
          font.className,
          "text-6xl font-semibold text-gray-50 drop-shadow-md"
        )}
      >
        XatUp
      </h1>
    </div>
  );
};

export default LogoName;
