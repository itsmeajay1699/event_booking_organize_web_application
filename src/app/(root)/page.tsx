import EventPostCard from "@/components/EventPostCard";
import SearchBar from "@/components/SearchBar";
import ShowGrid from "@/components/ShowGrid";
import prisma from "@/db";
import authOptions from "@/lib/auth_option";
import { EventPost } from "@/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // use middle ware todo
  if (!session) {
    redirect("/sign-in");
  }

  const res1: EventPost[] = await prisma.eventPost.findMany({
    include: {
      user: true,
      tickets: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });

  return (
    <div>
      <div className="pt-5 flex flex-row-reverse">
        <div className="w-full flex max-w-[400px]">
          <SearchBar />
        </div>
      </div>

      <h1
        className="
        text-4xl
        font-bold
        mb-4
        "
      >
        Events
      </h1>

      <div className="text-primary w-full">
        <ShowGrid data={res1} />
      </div>
    </div>
  );
}
