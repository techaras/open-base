"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser, UserButton } from "@clerk/nextjs";
import { ChevronsUpDown } from "lucide-react";
import { useRef } from "react";

export function UserInfo() {
  const { user } = useUser();
  const userButtonRef = useRef<HTMLDivElement>(null);

  if (!user) return null;

  const handleClick = (e: React.MouseEvent) => {
    // If the click is on the UserButton itself, let it handle it naturally
    if (userButtonRef.current?.contains(e.target as Node)) {
      return;
    }

    // Otherwise, programmatically click the UserButton
    const button = userButtonRef.current?.querySelector("button");
    if (button) {
      button.click();
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="cursor-pointer" onClick={handleClick}>
          <div ref={userButtonRef}>
            <UserButton />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              {user.firstName} {user.lastName}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}