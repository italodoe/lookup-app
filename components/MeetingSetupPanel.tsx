import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { DeviceSettings } from "@stream-io/video-react-sdk";
import { boolean } from "zod";

type CardProps = {
  onClickJoinHandle: () => void;
  onChangeMicHandle: (e: any) => void;
  onChangeCamHandle: (e: any) => void;
  isCamToggledOn: boolean;
  isMicToggledOn: boolean;
};

export function MeetingSetupPanel({
  onClickJoinHandle,
  onChangeMicHandle,
  onChangeCamHandle,
  isCamToggledOn,
  isMicToggledOn,
}: CardProps) {
  //TODO get users  in the room
  const nUsers = 0;
  return (
    <Card
      className={cn(
        "w-[380px] backdrop-blur-md bg-white/20 text-white border-0"
      )}
    >
      <CardHeader>
        <CardTitle className="font-medium text-xl">
          Your meeting is Ready!
        </CardTitle>
        <CardDescription className="text-sm text-white/60 font-light">
          {nUsers === 0 ? "The room is empty" : ""}
          {nUsers > 0 && (
            <span>
              {nUsers} user{nUsers > 1 ? "s" : ""}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div
          className={cn(
            " flex items-center space-x-4 rounded-md border p-4 backdrop-blur-sm bg-white/20 border-none",
            !isCamToggledOn
              ? " bg-lime-800/50"
              : "bg-red-500/40 backdrop-blur-md"
          )}
        >
          <Image
            src={
              isCamToggledOn
                ? "/icons/cam-disabled-icon.svg"
                : "/icons/cam-user-enabled-icon.svg"
            }
            alt={"camera icon"}
            width={22}
            height={22}
          />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {isCamToggledOn ? "Cam OFF" : "Cam ON"}
            </p>
          </div>
          <Switch
            className="meet-setup-switch"
            id="meeting-camera"
            checked={isCamToggledOn}
            onCheckedChange={(checked) => onChangeCamHandle(checked)}
          />
        </div>

        <div
          className={cn(
            " flex items-center space-x-4 rounded-md border p-4 backdrop-blur-sm bg-white/20 border-none ",
            !isMicToggledOn
              ? " bg-lime-800/50"
              : "bg-red-500/40 backdrop-blur-md"
          )}
        >
          <Image
            src={
              isMicToggledOn
                ? "/icons/mic-disabled-icon.svg"
                : "/icons/mic-enabled-icon.svg"
            }
            alt={"camera icon"}
            width={22}
            height={22}
          />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {isMicToggledOn ? "Mic OFF" : "Mic ON"}
            </p>
          </div>

          <Switch
            className="meet-setup-switch"
            id="meeting-mic"
            checked={isMicToggledOn}
            onCheckedChange={(checked) => onChangeMicHandle(checked)}
          />
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4 backdrop-blur-sm bg-black/20 border-none">
          <Image
            src={"/icons/arrow-right-icon.svg"}
            alt={"camera icon"}
            width={22}
            height={22}
          />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Settings</p>
          </div>
          <div className="max-w-[36px] max-h-[36px]">
            {" "}
            <DeviceSettings></DeviceSettings>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full " onClick={onClickJoinHandle}>
          <CheckIcon className="mr-2 h-4 w-4" /> Start Meeting
        </Button>
      </CardFooter>
    </Card>
  );
}
