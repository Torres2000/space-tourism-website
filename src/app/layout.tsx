import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import icon from "@/app/assets/favicon-32x32.png";

const tinos = Tinos({ weight: ["400"], subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "Space Tourism  ",
  description: "Space tourism multi-page website",
  icons: {
    icon: "./favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tinos.className}>{children}</body>
    </html>
  );
}
