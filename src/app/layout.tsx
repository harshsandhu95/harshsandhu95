import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Sandhu - Frontend Developer & Designer",
  description: "Harsh Sandhu is a Frontend Developer & Designer based in India who loves to build beautiful and functional websites.",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
