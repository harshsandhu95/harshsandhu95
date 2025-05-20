import type { Metadata } from "next";
import RootProvider from "@/components/providers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Harsh Sandhu | Software Engineer & Entrepreneur",
  description:
    "Harsh Sandhu is a software engineer and entrepreneur based in Ludhiana, India. He is the co-founder of Waterhouse Foundation and a fullstack developer at MagicEdtech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontSans.className)}>
        <RootProvider>
          {children}
          <Toaster />
          <Navbar />
        </RootProvider>
      </body>
    </html>
  );
}
