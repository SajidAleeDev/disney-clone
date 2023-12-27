import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#1A1C29] bg-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
