import React from "react";

import { EventPost } from "@/types";
import { LucideMousePointer2 } from "lucide-react";
import Image from "next/image";

const EventPostCard = (event: EventPost) => {
  return (
    <div className="shadow-lg rounded-2xl  bg-white text-black">
      <div>
        <div className="relative">
          <Image
            className="w-full h-[200px] object-cover rounded-t-2xl"
            src={event.image}
            alt={event.title}
            height={500}
            width={200}
          />
        </div>

        <div className="px-4 py-6">
          <header className="flex justify-between gap-2">
            <h2 className="text-2xl font-bold truncate">{event.title}</h2>
            <p className="text-lg ">
              {event.type === "free" ? "Free" : `$${event.price}`}
            </p>
          </header>

          <p className="text-lg font-light text-gray-500 mt-2 truncate">
            {event.description}
          </p>
          <div className="flex items-center text-lg  gap-1">
            <LucideMousePointer2 size={16} />
            {event.location}
          </div>

          <div className="flex justify-between">
            {event.soldTickets >= event.totalTickets ? (
              <p className="text-lg text-red-500">Sold Out</p>
            ) : (
              <p className="text-lg text-green-500">
                {event.soldTickets}/{event.totalTickets} Tickets Sold
              </p>
            )}

            {/* <div className="text-lg text-gray-500">
              {new Date(event.date).toLocaleDateString()}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPostCard;
