"use client";

import React from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import GlobalLoader from "@/components/GlobalLoader";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}
