"use client";
import { cn } from "@/lib/utils";
import { HomeIcon } from "@radix-ui/react-icons";
import { FanIcon } from "lucide-react";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeMeetingCards = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  return (
    <section className={cn("home-meeting-list", "mt-10")}>
      <div className="items-center flex gap-2">
        <Image
          src={"/icons/logo-outline.svg"}
          alt={"cam logo"}
          width={32}
          height={32}
        />
        <span>Sections</span>
      </div>
      <div className="app-menu h-full overflow-hidden  relative ">
        <div className="app-menu-content-wrapper  mt-8 pt-0">
          <div className="app-menu-content mx-auto   relative">
            <div className="menu-section mt-15">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <HomeCard
                  img="/icons/cam-circle-outline.svg"
                  title="New Meeting"
                  description="Start an instant meeting"
                  handleClick={() => setMeetingState("isInstantMeeting")}
                  className=" bg-paper-1 background-image "
                />
                <HomeCard
                  img="/icons/schedule.svg"
                  title="Schedule Meeting"
                  description="Plan your meeting"
                  handleClick={() => setMeetingState("isScheduleMeeting")}
                  className=" bg-paper-5 background-image "
                />
                <HomeCard
                  img="/icons/recordings-outline-2.svg"
                  title="View Recordings"
                  description="Check out your recordings"
                  handleClick={() => router.push("/dashboard/recordings")}
                  className=" bg-paper-3 background-image "
                />
                <HomeCard
                  img="/icons/add-circle-outline.svg"
                  title="Join Meeting"
                  description="via invitation link"
                  handleClick={() => setMeetingState("isJoiningMeeting")}
                  className=" bg-paper-4 background-image "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMeetingCards;
