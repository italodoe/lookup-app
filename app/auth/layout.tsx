import { cn } from "@/lib/utils";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center backdrop-blur-sm",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]/50 from-sky-400 to-blue-800"
      )}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
