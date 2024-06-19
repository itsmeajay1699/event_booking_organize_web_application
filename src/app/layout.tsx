import type { Metadata } from "next";

import "./globals.css";
import NextAuthProvider from "@/provider/next_auth";
import LeftSidebar from "@/components/LeftSidebar";
import { Provider } from "@/context/Context";
import ShowSidebar from "@/components/ShowSidebar";

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
      <body className="h-full flex flex-col bg-gray-200">
        <NextAuthProvider>
          <Provider>
            <main className="">{children}</main>
          </Provider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
