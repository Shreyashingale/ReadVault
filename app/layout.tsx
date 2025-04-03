"use client";


import { SessionProvider } from "next-auth/react";

// These styles apply to every route in the application
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  )
}