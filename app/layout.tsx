"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import ProviderTheme from "@/components/ProviderTheme";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProviderTheme>
          <Header />
          <div className='mx-40'>
            <Provider store={store}>{children}</Provider>
          </div>
        </ProviderTheme>
      </body>
    </html>
  );
}
