import type { Metadata } from "next";

import "./globals.css";

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
      <body className="h-full flex flex-col">{children}</body>
    </html>
  );
}
