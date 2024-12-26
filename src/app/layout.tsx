"use client";

import { Roboto } from "next/font/google";
import { BuildingsProvider } from "./context/BuildingsContext";

import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />

        <BuildingsProvider>{children}</BuildingsProvider>
      </body>
    </html>
  );
}
