"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useToast } from "@/hooks/use-toast";
import CallCard from "./CallCard";

// @ts-nocheck

const MeetingCallCards = ({
  type,
}: {
  type: "ended" | "upcoming" | "recordings";
}) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const { toast } = useToast();
  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };
  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No previous Calls";
      case "recordings":
        return "No Recordings Calls";
      case "upcoming":
        return "No Upcoming Calls";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings?.map((meeting) => meeting.queryRecordings()) ?? []
        );

        const recordings = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch (error) {
        toast({ title: "Try again later" });
      }
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  const calls = getCalls();
  const noCallMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => {
          const date =
            meeting instanceof Call && meeting.state
              ? meeting.state?.startsAt?.toLocaleString()
              : (meeting as CallRecording).start_time.toLocaleString();
          const meetingId = meeting instanceof Call ? meeting.id : meeting.url;
          return (
            <CallCard
              key={(meeting as Call)?.id}
              icon={
                type === "ended"
                  ? "/icons/previous.svg"
                  : type === "upcoming"
                  ? "/icons/upcoming.svg"
                  : "/icons/recordings.svg"
              }
              title={
                (meeting as Call).state?.custom?.description?.substring(
                  0,
                  26
                ) ||
                (meeting as Call)?.state?.custom?.filename?.substring(0, 20) ||
                "No description"
              }
              date={date || ""}
              isPreviousMeeting={type === "ended"}
              buttonIcon1={
                type === "recordings"
                  ? "/icons/play-outline-icon.svg"
                  : undefined
              }
              buttonText={type === "recordings" ? "Play" : "Start"}
              handleClick={
                type === "recordings"
                  ? () => router.push(`${meetingId}`)
                  : () => router.push(`/dashboard/meeting/${meetingId}`)
              }
              link={
                type === "recordings"
                  ? meetingId
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/meeting/${meetingId}`
              }
            />
          );
        })
      ) : (
        <h1>{noCallMessage}</h1>
      )}
    </div>
  );
};

export default MeetingCallCards;
