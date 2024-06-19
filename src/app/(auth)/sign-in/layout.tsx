import LeftSideImage from "@/components/LeftSideImage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-[100dvh] p-3 gap-10">
      {/* one section */}

      <div className="hidden lg:block w-full flex-grow">
        <LeftSideImage />
      </div>

      {/* second section */}
      <div className="flex-grow w-full px-2 md:p">
        <div className="mt-5">{children}</div>
      </div>
    </main>
  );
}
