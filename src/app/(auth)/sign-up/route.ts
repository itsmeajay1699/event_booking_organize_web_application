import prisma from "@/db";

export async function POST(request: Request) {
  try {
    const res = await request.json(); // reading the body of the request

    // create a new user

    const user = await prisma.user.create({
      data: {
        username: res.username,
        email: res.email,
        password: res.password,
        role: res.role ? 1 : 0,
      },
    });

    return Response.json({ user });
  } catch (err) {
    console.error(err);
    return Response.error();
  }
}
