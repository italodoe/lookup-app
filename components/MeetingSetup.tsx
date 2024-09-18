"use client";
import { extendedUser } from "@/next-auth";
import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { MeetingSetupPanel } from "./MeetingSetupPanel";
import NavbarSetup from "./NavbarSetup";

const MeetingSetup = ({
  setIsSetupComplete,
  user,
}: {
  user: extendedUser;
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isCamToggledOn, setIsCamToggledOn] = useState(false);
  const [isMicToggledOn, setIsMicToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("useCall must be user within  StreamCall component");
  }

  useEffect(() => {
    if (isCamToggledOn) {
      call?.camera.disable();
    } else {
      call?.camera.enable();
    }

    if (isMicToggledOn) {
      call?.microphone.disable();
    } else {
      call?.microphone.enable();
    }
  }, [isCamToggledOn, isMicToggledOn, call?.camera, call?.microphone]);

  return (
    <>
      <div className="relative">
        <NavbarSetup />
        <div className="flex h-full w-full flex-row max-lg:flex-col items-center justify-center gap-3 text-white mt-16 mx-auto">
          <div className="relative w-6/12 max-lg:w-10/12 h-auto rounded-3xl">
            <VideoPreview className="w-full rounded-3xl "></VideoPreview>
            {user && (
              <div className="absolute top-4 left-5 font-light text-white/90">
                {user.name || user.email}
              </div>
            )}
          </div>

          <div className="flex flex-col p-10  items-center justify-center ">
            <MeetingSetupPanel
              isCamToggledOn={isCamToggledOn}
              onChangeCamHandle={setIsCamToggledOn}
              isMicToggledOn={isMicToggledOn}
              onChangeMicHandle={setIsMicToggledOn}
              onClickJoinHandle={() => {
                call.join();
                setIsSetupComplete(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingSetup;
