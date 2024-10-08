"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

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
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } 
   
  }, []);
  return (
    <html lang='en' data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header theme={theme} setTheme={setTheme} />
        <div className=' mx-40'>
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
