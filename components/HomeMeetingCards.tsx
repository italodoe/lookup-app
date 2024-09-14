"use client";
import { useToast } from "@/hooks/use-toast";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";

const HomeMeetingCards = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const user = useCurrentUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and time",
        });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        //todo create constants
        router.push(`/dashboard/meeting/${call.id}`);
      }

      toast({
        title: "Meeting created",
      });
    } catch (error) {
      toast({
        title: "Failed to create meeting",
      });
    }
  };

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
                {/* isInstantMeeting */}
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

      {/* isInstantMeeting */}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        handleClick={createMeeting}
        values={{
          action: "New meeting",
          title: "Start an Instant Meeting",
          className: "text-center",
          buttonText: "Start Meeting",
        }}
      />
    </section>
  );
};

export default HomeMeetingCards;
