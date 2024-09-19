import { auth } from "@/auth";
import BackgroundSvg from "@/components/BackgroundSvg";
import HomeMeetingCards from "@/components/HomeMeetingCards";
import HomeMeetingHeader from "@/components/HomeMeetingHeader";
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
      <BackgroundSvg />
      <HomeMeetingHeader time={time} date={date} />

      <HomeMeetingCards />
    </section>
  );
};

export default HomePage;
