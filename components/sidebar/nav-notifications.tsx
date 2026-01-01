"use client";

import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

export function NotificationsPopover() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label="Open notifications"
    >
      <BellIcon className="size-5" />
    </Button>
  );
}
