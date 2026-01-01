import {
  CheckSquare,
  CreditCard,
  ListTodo,
  Settings,
  UserCircle,
} from "lucide-react";
import type { Route } from "@/components/sidebar/nav-main";

/**
 * Dashboard routes for regular users
 */
export const dashboardRoutes: Route[] = [
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
] as const;

/**
 * Admin routes for admin users
 */
export const adminRoutes: Route[] = [
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
] as const;

/**
 * Get routes based on the current pathname section
 * @param isAdminSection - Whether the current path is in the admin section
 * @returns The appropriate routes array
 */
export function getRoutes(isAdminSection: boolean): Route[] {
  return isAdminSection ? adminRoutes : dashboardRoutes;
}