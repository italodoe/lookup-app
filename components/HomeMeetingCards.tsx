"use client";
import { useToast } from "@/hooks/use-toast";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/meeting/${callDetails?.id}`;

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
                  className=" bg-paper-card-13 backdrop-blur-xl background-image "
                />
                <HomeCard
                  img="/icons/calendar-circle.svg"
                  title="Schedule Meeting"
                  description="Plan your meeting"
                  handleClick={() => setMeetingState("isScheduleMeeting")}
                  className=" bg-paper-card-15 backdrop-blur-xl background-image "
                />
                <HomeCard
                  img="/icons/recordings-outline-2.svg"
                  title="View Recordings"
                  description="Check out your recordings"
                  handleClick={() => router.push("/dashboard/recordings")}
                  className=" bg-paper-card-18 backdrop-blur-xl background-image "
                />
                <HomeCard
                  img="/icons/add-circle-outline.svg"
                  title="Join Meeting"
                  description="via invitation link"
                  handleClick={() => setMeetingState("isJoiningMeeting")}
                  className=" bg-paper-card-14 backdrop-blur-xl background-image "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scheduleMeeting */}
      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => {
            setMeetingState(undefined);
          }}
          handleClick={createMeeting}
          values={{
            action: "Schedule meeting",
            title: "Create Meeting",
            className: "text-center",
          }}
        >
          <div className="flex flex-col gap-2.5 text-sky-200">
            <label className="text-base text-normal leading-[22px] text-sky-1">
              Add a description
            </label>
            <Textarea
              className="text-sky-200 border-none bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            ></Textarea>
          </div>
          <div className="flex w-full flex-col gap-2.5 text-sky-200">
            <label className="text-base text-normal leading-[22px] text-sky-1">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => {
                setValues({ ...values, dateTime: date! });
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat={"MMMM d, yyyy h:m aa"}
              className="w-full rounded bg-dark-2 p-2 focus:outline-none "
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => {
            setMeetingState(undefined);
            setCallDetails(undefined);
          }}
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link copied" });
          }}
          values={{
            action: "Schedule meeting",
            title: "Meeting Created",
            className: "text-center",
            image: "/icons/checked-outline-icon.svg",
            buttonIcon: "/icons/copy-outline-icon.svg",
            buttonText: "Copy Meeting Link",
          }}
        />
      )}
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

      {/* JoiningMeeting */}
      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        handleClick={() => router.push(values.link)}
        values={{
          action: "Join meeting",
          title: "Type the link here",
          className: "text-center",
          buttonText: "Join Meeting",
        }}
      >
        <Input
          placeholder="Meeting link"
          className="border-none bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0 text-sky-200"
          onChange={(e) => {
            setValues({ ...values, link: e.target.value });
          }}
        />
      </MeetingModal>
    </section>
  );
};

export default HomeMeetingCards;
