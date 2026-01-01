"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CheckSquare,
  CreditCard,
  ListTodo,
  Settings,
  UserCircle,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import type { Route } from "./nav-main";
import DashboardNavigation from "./nav-main";
import { UserInfo } from "./user-info";

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();

  // Detect which section we're in
  const isAdminSection = pathname.startsWith("/admin");

  // Dashboard routes (for regular users)
  const dashboardRoutes: Route[] = [
    {
      id: "my-tasks",
      title: "My Tasks",
      icon: <CheckSquare className="size-4" />,
      link: "/dashboard/my-tasks",
    },
    {
      id: "available-tasks",
      title: "Available Tasks",
      icon: <ListTodo className="size-4" />,
      link: "/dashboard/available-tasks",
    },
    {
      id: "settings",
      title: "Settings",
      icon: <Settings className="size-4" />,
      link: "/dashboard/settings",
    },
  ];

  // Admin routes (for admin users)
  const adminRoutes: Route[] = [
    {
      id: "profiles",
      title: "Profiles",
      icon: <UserCircle className="size-4" />,
      link: "/admin/profiles",
    },
    {
      id: "tasks",
      title: "Tasks",
      icon: <ListTodo className="size-4" />,
      link: "/admin/tasks",
    },
    {
      id: "payments",
      title: "Payments",
      icon: <CreditCard className="size-4" />,
      link: "/admin/payments",
    },
  ];

  // Select which routes to show based on current section
  const routes = isAdminSection ? adminRoutes : dashboardRoutes;

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader
        className={cn(
          "flex md:pt-3.5",
          isCollapsed
            ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
            : "flex-row items-center justify-between"
        )}
      >
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          {!isCollapsed && (
            <span className="font-semibold text-black dark:text-white">
              OpenBase
            </span>
          )}
        </a>

        <motion.div
          key={isCollapsed ? "header-collapsed" : "header-expanded"}
          className={cn(
            "flex items-center gap-2",
            isCollapsed ? "flex-row md:flex-col-reverse" : "flex-row"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SidebarTrigger />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <DashboardNavigation routes={routes} />
      </SidebarContent>
      <SidebarFooter className="px-2">
        <UserInfo />
      </SidebarFooter>
    </Sidebar>
  );
}
