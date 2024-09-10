import LoginButton from "@/components/auth/LoginButton";
import LogoName from "@/components/LogoName";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className={cn(
        "flex h-full flex-col items-center justify-center backdrop-blur-sm",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]/50 from-sky-400 to-blue-800"
      )}
    >
      <div className="space-y-6 text-center ">
        <LogoName href={"/"} />
        <p className="text-white tex-lg ">Video Meeting App</p>
      </div>
      <div className="my-6 text-center ">
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
