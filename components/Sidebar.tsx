"use client";
import { sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className={cn(
        `bg-default-1`,
        "sticky left-0 top-0 flex h-screen w-fit flex-col justify-between p-6 h-auto  text-white",
        "max-sm:hidden jg:w-[264px]"
      )}
    >
      <div>
        <Link
          href="/"
          className="flex items-center gap-1 max-lg:justify-center w-fill lg:pl-5"
        >
          <Image
            src={"/icons/logo-black.svg"}
            width={32}
            height={32}
            alt={"LookUp"}
            className="max-sm:size-10"
          />
          <p className="text-white font-bold text-[26px] max-lg:hidden ">
            LookUp
          </p>
        </Link>
      </div>
      <div className="flex flex-1 flex-col  justify-center gap-6 relative">
        {sidebarItems.map((item) => {
          const active =
            pathname === item.route ||
            (item.route.length > 1 && pathname.startsWith(item.route));
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-5 items-center p-5 rounded-lg justify-start max-lg:justify-center	",
                { "bg-default-4": active },
                "hover:bg-onyx-1"
              )}
            >
              <Image
                src={item.imgUrl}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
