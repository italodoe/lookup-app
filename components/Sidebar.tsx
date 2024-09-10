"use client";
import { logout } from "@/actions/logout";
import { logoutItem, sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoName from "./LogoName";
import { Button } from "./ui/button";

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
        <LogoName
          classes="text-3xl text-gray-50"
          href={DEFAULT_LOGIN_REDIRECT}
        />
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
      <div>
        <form
          action={async () => {
            await logout();
          }}
        >
          <div
            className={cn(
              "flex gap-5 items-center p-5 rounded-lg justify-start max-lg:justify-center	cursor-pointer",

              "hover:bg-onyx-1"
            )}
          >
            <Image
              src={logoutItem.imgUrl}
              alt={logoutItem.label}
              width={24}
              height={24}
            />
            <Button
              variant={"secondary"}
              className="text-lg font-semibold max-lg:hidden"
            >
              {logoutItem.label}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Sidebar;
