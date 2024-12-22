import type { Metadata } from "next";
import React from "react";
import RootProvider from "@/components/RootProvider";
import { cn } from "@/lib/utils";
import { sans_font } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Sandhu - Frontend Developer & Designer",
  description: "Harsh Sandhu is a Frontend Developer & Designer based in India who loves to build beautiful and functional websites.",
};

const RootLayout = ({
  children,
}: Readonly<React.PropsWithChildren<{}>>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("py-12 sm:py-24 px-6 mx-auto max-w-2xl", sans_font.variable)}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

export default RootLayout;
