import React from "react";
import { Poppins } from "next/font/google";

import Image from "next/image";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface LogoNameProps {
  classes?: string;
}

const LogoName = ({ classes }: LogoNameProps) => {
  return (
    <div className={cn("flex flex-row")}>
      <Image
        src={"/icons/logo-black.svg"}
        width={48}
        height={48}
        alt={"LookUp"}
        className="max-sm:size-10"
      />
      <h1
        className={cn(
          classes ?? "text-6xl text-gray-50",
          font.className,
          " font-semibold drop-shadow-md"
        )}
      >
        XatUp
      </h1>
    </div>
  );
};

export default LogoName;
