import React from "react";
import LeftSidebar from "./LeftSidebar";

import OrganizerSidebar from "./OrganizerSidebar";
import { getServerSession } from "@/utils/server-session";

const ShowSidebar = async () => {
  const session = await getServerSession();

  console.log(session);

  return session?.user.role ? <OrganizerSidebar /> : <LeftSidebar />;
};

export default ShowSidebar;
