"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const user = useCurrentUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!user || isCallLoading) return <Loader></Loader>;

  return (
    <>
      <BackgroundGradientAnimation
        gradientBackgroundStart="black"
        gradientBackgroundEnd="rgb(0, 17, 82)"
        // firstColor="18, 113, 255"
        firstColor="14, 59, 45"
        // secondColor="221, 74, 255"
        secondColor="159, 6, 70"
        // thirdColor="100, 220, 255"
        thirdColor="28, 142, 210"
        // fourthColor="200, 50, 50"
        fourthColor="0, 83, 2"
        // fifthColor="180, 180, 50"
        fifthColor="141, 85, 0"
        size="137%"
        interactive={false}
        blendingValue={"hard-light"}
      ></BackgroundGradientAnimation>
      <main className="h-screen w-full absolute z-50 inset-0">
        <StreamCall call={call}>
          <StreamTheme>
            {!isSetupComplete ? (
              <MeetingSetup
                setIsSetupComplete={setIsSetupComplete}
                user={user}
              ></MeetingSetup>
            ) : (
              <MeetingRoom></MeetingRoom>
            )}
          </StreamTheme>
        </StreamCall>
      </main>
    </>
  );
};

export default Meeting;
