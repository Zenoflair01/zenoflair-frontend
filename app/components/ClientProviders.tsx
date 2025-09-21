"use client";

import React from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import GlobalLoader from "@/components/GlobalLoader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <GlobalLoader />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
