"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { logoutItem, sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoName from "./LogoName";
import { Button } from "./ui/button";
import { logout } from "@/actions/logout";

const MobileNav = () => {
  const pathname = usePathname();
  const onClick = async () => {
    await logout();
  };
  return (
    <section className="w-full max-w-[264]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt={"menu"}
            width={42}
            height={42}
            className="hover:bg-onyx-1 rounded-full p-1 cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-default-1">
          <div className="w-full items-center flex gap-1 max-lg:justify-center justify-center ">
            <LogoName
              classes="text-3xl text-gray-50 "
              href={DEFAULT_LOGIN_REDIRECT}
            />
          </div>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto ">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-zinc-50">
                {sidebarItems.map((item) => {
                  const active =
                    pathname === item.route ||
                    (item.route.length > 1 && pathname.startsWith(item.route));
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-5 items-center p-5 rounded-lg w-full	max-w-64",
                          { "bg-default-4": active },
                          "hover:bg-onyx-1 "
                        )}
                      >
                        <Image
                          src={item.imgUrl}
                          alt={item.label}
                          width={24}
                          height={24}
                        />
                        <p className="text-lg font-medium ">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
                <div className="flex flex-2   justify-start gap-6 relative">
                  <Button
                    onClick={onClick}
                    type="submit"
                    variant={"ghost"}
                    className={cn(
                      "flex gap-5 items-center px-5 py-8 rounded-lg justify-start max-lg:justify-center	",

                      "hover:bg-onyx-1"
                    )}
                  >
                    <Image
                      src={logoutItem.imgUrl}
                      alt={logoutItem.label}
                      width={24}
                      height={24}
                    />
                    <p className="text-lg font-semibold p-1 ">
                      {logoutItem.label}
                    </p>
                  </Button>
                </div>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
