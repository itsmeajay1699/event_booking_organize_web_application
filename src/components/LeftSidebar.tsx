"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LeftSidebarProps = {
  title: string;
  icon: any;
  url: URL | string;
};

const leftbar: LeftSidebarProps[] = [
  {
    title: "Home",
    icon: <Home size={20} />,
    url: "/",
  },
  {
    title: "Trending Events",
    icon: <Home size={20} />,
    url: "/trending",
  },

  {
    title: "Booked Events",
    icon: <Home size={20} />,
    url: "/booked",
  },

  {
    title: "Bookmarked Events",
    icon: <Home size={20} />,
    url: "/bookmarked",
  },
];

const LeftSidebar = () => {
  const url = usePathname();

  return (
    <div className="flex flex-col space-y-4 left_sidebar">
      <div className="p-3 pr-0 rounded-r-2xl">
        {leftbar.map((item, index) => (
          <Link
            href={item.url}
            className={`flex items-center space-x-2 p-4 cursor-pointer hover:bg-red-500 hover:rounded-l-lg transition-all  ${
              url === item.url
                ? "bg-gray-700 border-r-4 border-red-500 rounded"
                : ""
            }`}
            key={index}
          >
            <div className="text-white">{item.icon}</div>
            <div
              className="text-white
              hidden lg:block
            "
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
