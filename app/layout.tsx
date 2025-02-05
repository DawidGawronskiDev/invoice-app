import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Aside from "./ui/aside";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} flex`}>
        <Aside />
        {children}
      </body>
    </html>
  );
}
