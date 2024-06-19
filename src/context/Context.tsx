"use client";

import { createContext, useState } from "react";

// create the context
const Context = createContext({
  user: null,
  setUser: (user: any) => {},
  search: "",
  setSearch: (search: string) => {},
});

// create the provider

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const [search, setSearch] = useState("");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
