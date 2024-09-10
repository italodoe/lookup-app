import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface LogoNameProps {
  classes?: string;
  href: string;
}

const LogoName = ({ classes, href }: LogoNameProps) => {
  return (
    <Link href={href}>
      <div className={cn("flex flex-row items-center")}>
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
    </Link>
  );
};

export default LogoName;
