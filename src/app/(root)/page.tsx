import authOptions from "@/lib/auth_option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1 className="text-primary">Hello world</h1>
    </div>
  );
}
