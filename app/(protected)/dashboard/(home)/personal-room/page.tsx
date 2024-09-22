"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useGetCallById } from "@/hooks/useGetCallById";
import { cn } from "@/lib/utils";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

function PersonalRoom() {
  const { toast } = useToast();
  const user = useCurrentUser();
  const client = useStreamVideoClient();
  const router = useRouter();
  const meetingId = user?.id;
  const { host } = window.location;
  const meetingLink = `${process.env.NEXT_PUBLIC_PROTOCOL}://${host}/dashboard/meeting/${meetingId}?personal=true`;
  const { call } = useGetCallById(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;
    const newCall = client.call("default", meetingId!);
    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/dashboard/meeting/${meetingId}?personal=true`);
  };
  return (
    <section className="flex size-full flex-col gap-10 text-slate-50">
      <h1 className="text-4xl font-light">Personal Room</h1>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
        <Card
          className={cn(
            `bg-default-1 border-none backdrop-blur-xl bg-[#000e1f]/70 `,
            "flex flex-col p-4 rounded-xl  max-lg:max-w-[300px] w-[600px] shadow-md text-white"
          )}
        >
          <CardHeader>
            <p className="text-xl font-semibold text-center">{`${user?.name}'s Meeting Room`}</p>
          </CardHeader>
          <CardContent>
            <div className="my-6 space-y-1">
              <label>Meeting ID</label>
              <div>{meetingId!}</div>
            </div>

            <div className="my-6 space-y-1">
              <label>Invite Link</label>
              <Input value={meetingLink} readOnly type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex items-start gap-4 flex-wrap">
              <Button className=" btn-primary-stl" onClick={startRoom}>
                Start Meeting
              </Button>
              <Button
                className="btn-secondary-stl"
                variant={"outline"}
                onClick={() => {
                  navigator.clipboard.writeText(meetingLink);
                  toast({ title: "Link copied" });
                }}
              >
                Copy Link
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default PersonalRoom;
