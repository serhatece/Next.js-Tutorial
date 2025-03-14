import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Geist />
        <Geist_Mono />
        {children}
      </body>
    </html>
  );
}
