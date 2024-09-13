import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <section className="  rounded-3xl flex  flex-1 flex-col px-6 pb-6 pt-16 max-md:pb-14 sm:px-14 mx-5 max-sm:mb-4 min-h-[calc(100vh-3rem)] shadow hover:shadow-md backdrop-blur-sm bg-white/10">
          <div className="w-full break-all">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default HomeLayout;
