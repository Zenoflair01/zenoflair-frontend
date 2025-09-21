"use client";

import React from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import GlobalLoader from "@/components/GlobalLoader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <GlobalLoader />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
