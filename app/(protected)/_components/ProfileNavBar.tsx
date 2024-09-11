"use client";
import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import { DEFAULT_PROFILE_PAGE } from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileNavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const user = useCurrentUser();
  const isAdmin = user.role === "ADMIN";
  return (
    <div
      className={cn(
        `bg-default-1`,
        "flex justify-between items-center p-4 rounded-xl min-w-[300px] w-[600px] shadow-md"
      )}
    >
      <div className="flex gap-x-2">

        {isAdmin && (
            <Button
            asChild
            className={
              pathname === "/dashboard/admin" ? "bg-default-2" : "bg-default-1"
            }
            variant={"default"}
          >
            <Link href={"/dashboard/client"}>Admin</Link>
          </Button>
        )}

        <Button
          asChild
          className={
            pathname === DEFAULT_PROFILE_PAGE ? "bg-default-2" : "bg-default-1"
          }
          variant={"default"}
        >
          <Link href={DEFAULT_PROFILE_PAGE}>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};

export default ProfileNavBar;
