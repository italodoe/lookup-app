import { auth } from "@/auth";
import HomeMeetingCards from "@/components/HomeMeetingCards";
import React from "react";

const HomePage = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("es-CL", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-layer-circular-black-with-white bg-cover relative ">
        <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-slate-600/30 z-[2]  rounded-[20px]"></div>
        <div className="flex h-full flex-col justify-between p-4 max-md:px-5 max-md:py-8 lg:p-11 ">
          <h2 className="glassmorphism max-w-[270px] rounded text-center text-base font-normal p-2 z-10">
            Upcoming Meeting at: 12:30 PM TODO
          </h2>
          <div className="flex flex-col gap-2 z-10">
            <h1 className="text-4xl font-light lg:text-8xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      <HomeMeetingCards />
    </section>
  );
};

export default HomePage;
