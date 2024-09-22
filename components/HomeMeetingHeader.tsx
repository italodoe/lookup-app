"use client";
import { currentUser } from "@/lib/auth";
import { extendedUser } from "@/next-auth";
import React, { useState } from "react";
interface HomeMeetingHeaderProps {
  time: string;
  date: string;
  user: extendedUser|null;
}

const HomeMeetingHeader = ({ time, date, user }: HomeMeetingHeaderProps) => {
  const [hover, setHover] = useState(false);
  const video = "/videos/video.mp4";
  const image = "/images/layers-circular-black-background.jpg";

  return (
    <div
      className="h-[300px] w-full rounded-[20px] relative bg-paper-card-12 bg-cover"
      onMouseEnter={(e: React.MouseEvent) => setHover(true)}
      onMouseLeave={(e: React.MouseEvent) => setHover(false)}
    >
      {hover ? (
        <video
          muted
          loop
          autoPlay
          className="relative w-full h-full object-cover rounded-[20px]"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <></>
      )}
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-slate-600/30 z-[2]  rounded-[20px]"></div>

      <div className="flex h-full flex-col justify-between p-4 max-md:px-5 max-md:py-8 lg:p-11 absolute top-0 ">
        <h2 className="glassmorphism max-w-[270px] rounded text-center text-base font-normal p-2 z-10">
          Hi, {user ? user.name || user.email :  "There"}
          {/* Upcoming Meeting at: 12:30 PM TODO */}
        </h2>
        <div className="flex flex-col gap-2 z-10">
          <h1 className="text-4xl font-light lg:text-8xl">{time}</h1>
          <p className="text-lg font-medium text-sky-1">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeMeetingHeader;
