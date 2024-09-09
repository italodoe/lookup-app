import { cn } from "@/lib/utils";
import { Weight } from "lucide-react";
import React from "react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
// import LoginButton from "@/components/auth/LoginButton";
import Image from "next/image";
import LoginButton from "@/components/auth/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className={cn(
        "flex h-full flex-col items-center justify-center backdrop-blur-sm",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]/50 from-sky-400 to-blue-800"
      )}
    >
      <div className="space-y-6 text-center ">
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
        <p className="text-white tex-lg ">Video Meeting App</p>
     
      </div>
      <div className="my-6 text-center ">
      <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
  
    </main>
  );
}
