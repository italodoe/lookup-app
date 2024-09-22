import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface MeetingModalProps {
  values: {
    message?: string;
    action?: string;
    title?: string;
    className?: string;
    buttonText?: string;
    buttonIcon?: string;
    image?: string;
  };
  isOpen: boolean;
  onClose: () => void;
  handleClick: () => void;
  children?: ReactNode;
}

const MeetingModal = ({
  values: { message, action, title, className, buttonText, buttonIcon, image },
  isOpen,
  onClose,
  handleClick,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none backdrop-blur-xl bg-slate-3/30 px-6 py-9">
        <DialogHeader>
          <DialogTitle className="font-light text-sm text-white/40 hover:text-slate-200 cursor-default transition ease-in-out duration-200">
            {action}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="image" width={72} height={72} />
            </div>
          )}
          <h1
            className={cn(
              "text-3xl font-bold leading-[42px] text-slate-50 p-2",
              className
            )}
          >
            {title}
          </h1>

          {message && (
            <div className="w-full flex justify-center text-md pb-4 font-light">
              {message}
            </div>
          )}

          {children}
          <Button
            className="btn-primary-stl focus-visible:ring-0 focus-visible:ring-offset-0   "
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt="icon" width={13} height={13} />
            )}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
