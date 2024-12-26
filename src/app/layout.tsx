"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { BuildingsProvider } from "./context/BuildingsContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {" "}
        <BuildingsProvider>{children} </BuildingsProvider>
      </body>
    </html>
  );
}
