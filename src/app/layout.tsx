import type { Metadata } from "next";
import { data } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
