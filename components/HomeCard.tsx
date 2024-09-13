import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

function HomeCard({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      onClick={handleClick}
      className={cn(
        className,
        "hover:p-0  	transition ease-in-out duration-300",
        "home-card rounded-lg shadow-md cursor-pointer relative transition-transform duration-250 hover:translate-y-[-5px]",
        "flex flex-col justify-between w-full xl:max-w-[470px] min-h-[260px] rounded-[14px] cursor-pointer",
        "bg-gradient-to-t from-black/20 to-transparent select-none active:shadow-md"
      )}
    >
      <div className="home-card-content backdrop-blur-[5px]  rounded-lg h-full w-full">
        <div className="flex-center backdrop-blur-sm bg-[#d6ecff4d]/30 size-20 rounded-[10px] absolute top-6 left-6 m-5">
          <Image src={img} alt={title} width={45} height={45} />
        </div>
        <div className="home-card-content-items absolute bottom-0 right-0 flex flex-col m-5 text-right transition-margin duration-250">
          <div className="p-4">
            <h2 className="home-card-title text-whitesmoke text-[1.5em] break-normal">
              {title}
            </h2>
            <p className="home-card-desc text-[#fdd993] text-[0.9em] break-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
