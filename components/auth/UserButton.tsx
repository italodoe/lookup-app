import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { initials } from "@/lib/utils";

const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || "https://github.com/shadcn.png"} />
          <AvatarFallback className="bg-sky-900 text-white">
            {initials(user?.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <div>{user?.name}</div>
            <div className="text-xs text-zinc-600">{user?.email}</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* <DropdownMenuItem className="text-destructive">Delete Account</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
