"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo } from "react";
import type React from "react";

export type Route = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  link: string;
  subs?: {
    title: string;
    link: string;
    icon?: React.ReactNode;
  }[];
};

interface DashboardNavigationProps {
  routes: Route[];
}

/**
 * Individual navigation item component - memoized to prevent unnecessary re-renders
 */
const NavigationItem = memo(({ route, isCollapsed }: { route: Route; isCollapsed: boolean }) => {
  return (
    <SidebarMenuItem key={route.id}>
      <SidebarMenuButton tooltip={route.title} asChild>
        <Link
          href={route.link}
          prefetch={true}
          className={cn(
            "flex items-center rounded-lg px-2 transition-colors text-muted-foreground hover:bg-sidebar-muted hover:text-foreground",
            isCollapsed && "justify-center"
          )}
        >
          {route.icon}
          {!isCollapsed && (
            <span className="ml-2 text-sm font-medium">
              {route.title}
            </span>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
});

NavigationItem.displayName = "NavigationItem";

/**
 * Main navigation component - memoized to prevent unnecessary re-renders
 */
const DashboardNavigation = memo(({ routes }: DashboardNavigationProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu>
      {routes.map((route) => (
        <NavigationItem key={route.id} route={route} isCollapsed={isCollapsed} />
      ))}
    </SidebarMenu>
  );
});

DashboardNavigation.displayName = "DashboardNavigation";

export default DashboardNavigation;