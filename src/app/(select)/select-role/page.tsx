import SelectRoleCard from "@/components/SelectRoleCard";
import React from "react";
import "../../../styles/selectRoleCard.css";

const Page = () => {
  return (
    <section className="min-h-[100dvh] grid items-center justify-center check-card">
      <div className="flex flex-wrap gap-8 items-center justify-center">
        <SelectRoleCard
          title="Organizer"
          description="Create events and sell tickets."
          image="/organizer.jpg"
          role={1}
        />
        <SelectRoleCard
          title="Attendee"
          description="Book events and buy tickets."
          image="/attendee.jpg"
          role={0}
        />
      </div>
    </section>
  );
};

export default Page;
