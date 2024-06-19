"use client";
import { EventPost } from "@/types";
import React from "react";
import EventPostCard from "./EventPostCard";
import { Context } from "@/context/Context";

const ShowGrid = ({ data }: { data: EventPost[] }) => {
  const { search } = React.useContext(Context);

  return (
    <div
      className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    gap-6"
    >
      {data
        .filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((post) => (
          <EventPostCard {...post} key={post._id} />
        ))}
    </div>
  );
};

export default ShowGrid;
