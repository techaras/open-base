import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/sidebar/app-sidebar";
import type React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-[#F3F2F2]">
      <DashboardSidebar />
      <SidebarInset>
        <main className="flex-1 bg-[#F3F2F2]">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}