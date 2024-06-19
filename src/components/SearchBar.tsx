"use client";
import React from "react";
import { Search } from "lucide-react";

import { Input } from "./ui/input";
import { Context } from "@/context/Context";

const SearchBar = () => {
  const { search, setSearch } = React.useContext(Context);

  return (
    <div className="flex items-center justify-between w-full bg-white rounded-lg shadow-md p-2">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for events"
        className="w-full"
      />
      <Search size={24} />
    </div>
  );
};

export default SearchBar;
