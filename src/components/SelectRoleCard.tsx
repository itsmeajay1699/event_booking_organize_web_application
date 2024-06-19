import React from "react";
import { Button } from "./ui/button";

const SelectRoleCard = ({
  title,
  description,
  image,
  role,
}: {
  title: string;
  description: string;
  image: string;
  role: Number;
}) => {
  // api all will be done here

  return (
    <article className="card text-white h-[300px] md:h-[28.125rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="card__background"
        src={image}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title mt-2">{title}</h2>
          <p className="card__description text-white">{description}</p>
        </div>
        <Button className="mt-3">
          <a href="/auth/signin">Select Role</a>
        </Button>
      </div>
    </article>
  );
};

export default SelectRoleCard;
