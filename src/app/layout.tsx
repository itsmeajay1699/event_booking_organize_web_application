import type { Metadata } from "next";

import "./globals.css";
import NextAuthProvider from "@/provider/next_auth";

export const metadata: Metadata = {
  title: "Event Booking",
  description:
    "Book events online and create your own events. And earn money by selling tickets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full flex flex-col">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
