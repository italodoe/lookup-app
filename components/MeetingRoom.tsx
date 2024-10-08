"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";
import { Button } from "./ui/button";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const router = useRouter();

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader></Loader>;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout></PaginatedGridLayout>;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left"></SpeakerLayout>;
      default:
        return <SpeakerLayout participantsBarPosition="right"></SpeakerLayout>;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout></CallLayout>
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList
            onClose={() => setShowParticipants(false)}
          ></CallParticipantsList>
        </div>
      </div>

      <div className="fixed bottom-4 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls
          onLeave={() => router.push(DEFAULT_LOGIN_REDIRECT)}
        ></CallControls>

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
          
                <DropdownMenuSeparator className="border-dark-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton></CallStatsButton>
        <Button
          size={"icon"}
          className="bg-transparent hover:bg-transparent"
          onClick={() => setShowParticipants((prev) => !prev)}
          title="Participants list"
        >
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <Users size={20} className="text-white"></Users>
          </div>
        </Button>
        {!isPersonalRoom && <EndCallButton></EndCallButton>}
      </div>
    </section>
  );
};

export default MeetingRoom;
