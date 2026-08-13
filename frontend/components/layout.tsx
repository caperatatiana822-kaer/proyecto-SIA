"use client";

import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/siderbar";
import Navbar from "@/components/navbar"; 

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-1 flex-col">

          <Navbar /> 

          <main className="flex-1 p-6"> 
            {children}
          </main>

        </div> 

      </div>
    </SidebarProvider>
  );
}