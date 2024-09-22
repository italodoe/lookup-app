"use client";

import Image from "next/image";

import { toastDuration } from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CallCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const CallCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: CallCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] backdrop-blur-md bg-white/10 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        {!isPreviousMeeting && (
          <div className="flex gap-2 flex-wrap">
            <Button onClick={handleClick} className="btn-primary-stl w-28">
              &nbsp;&nbsp;&nbsp;
              {buttonIcon1 ? (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              ) : (
                <Image
                  src="/icons/cam-user-enabled-icon.svg"
                  alt="feature"
                  width={20}
                  height={20}
                />
              )}
              &nbsp; {buttonText}
              &nbsp;&nbsp;&nbsp;
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                  duration: toastDuration,
                });
              }}
              className="btn-secondary-stl"
            >
              <Image
                src="/icons/copy-outline-icon.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default CallCard;
