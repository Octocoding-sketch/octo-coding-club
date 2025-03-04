import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
    <html lang="en" suppressHydrationWarning>
      {/* import React from 'https://esm.sh/react@18.2.0' import ReactDOM from
        'https://esm.sh/react-dom@18.2.0' import {QueryClient} from */}

      {/* className={`${geistSans.variable} ${geistMono.variable}`} */}
      <body>{children}</body>
    </html>
  );
}
