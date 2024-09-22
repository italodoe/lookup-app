"use client"
import BackgroundSvg from "@/components/BackgroundSvg";
import HomeMeetingCards from "@/components/HomeMeetingCards";
import HomeMeetingHeader from "@/components/HomeMeetingHeader";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const HomePage = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(
    now
  );
  const user = useCurrentUser()
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <BackgroundSvg />
      
      <HomeMeetingHeader time={time} date={date} user={user??null} />

      <HomeMeetingCards />
    </section>
  );
};

export default HomePage;
