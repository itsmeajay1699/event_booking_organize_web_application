"use client";
import React from "react";

import { Home } from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type LeftSidebarProps = {
  title: string;
  icon: any;
  url?: string;
};

const leftbar: LeftSidebarProps[] = [
  {
    title: "Home",
    icon: <Home size={20} />,
    url: "/organizer",
  },
  {
    title: "My Events",
    icon: <Home size={20} />,
    url: "/organizer/myevents",
  },
  {
    title: "Create Event",
    icon: <Home size={20} />,
    url: "/organizer/createevent",
  },
];

const OrganizerSidebar = () => {
  const url = usePathname();
  return (
    <div className="flex flex-col space-y-4 left_sidebar">
      <div className="p-3 pr-0 rounded-r-2xl">
        {leftbar.map((item, index) => (
          <Link
            href={item.url as URL | string}
            className={`flex items-center space-x-2 p-4 cursor-pointer hover:bg-red-500 hover:rounded-l-lg transition-all ${
              url === item.url
                ? "bg-gray-700 border-r-4 border-red-500 rounded"
                : ""
            }`}
            key={index}
          >
            <div className="text-white">{item.icon}</div>
            <div className="text-white hidden lg:block">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrganizerSidebar;
