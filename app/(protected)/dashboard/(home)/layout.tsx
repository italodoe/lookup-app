import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
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
        size="127%"
        interactive={false}
        blendingValue={"hard-light"}
      ></BackgroundGradientAnimation>
      <div className="absolute z-40 bg-black/10 top-0 left-0 right-0 bottom-0"></div>
      <div className="absolute z-50 inset-0  ">
        <div className="relative">
          <Navbar />
          <div className="flex ">
            <Sidebar />
            <section
              className={cn(
                "transition-all	",
                "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] backdrop-blur-xl ",
                "  rounded-3xl flex  flex-1 flex-col px-6 pb-6 pt-16 max-md:pb-14 ",
                "sm:px-14 mx-5 max-sm:mb-4 min-h-[calc(100vh-3rem)] "
              )}
            >
              <div className="w-full break-all">{children}</div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
