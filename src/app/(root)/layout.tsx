import ShowSidebar from "@/components/ShowSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex items-start min-h-[100dvh]">
      <div className="bg-gray-400 left_sidebar s">
        <ShowSidebar />
      </div>

      <div className="w-full px-6  max-w-[1400px] mx-auto">{children}</div>
    </main>
  );
}
