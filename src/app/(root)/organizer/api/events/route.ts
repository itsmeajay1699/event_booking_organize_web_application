import prisma from "@/db";

export async function POST(request: Request) {
  try {
    console.log("POST /organizer/api/events");
    const res = await request.json(); // reading the body of the request

    console.log(res);

    const post = await prisma.eventPost.create({
      data: {
        title: res.title,
        description: res.description,
        image: res.image,
        date: res.date,
        location: res.location,
        type: res.type,
        totalTickets: res.totalTickets,
        soldTickets: res.soldTickets,
        price: res.price,
        userId: res.userId,
      },
    });

    return Response.json({ post });
  } catch (err) {
    console.error(err);
    return Response.error();
  }
}
