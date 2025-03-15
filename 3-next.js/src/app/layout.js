import { Geist, Geist_Mono } from "next/font/google";


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
