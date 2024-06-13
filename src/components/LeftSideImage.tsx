import Image from "next/image";
import React from "react";

const LeftSideImage = () => {
  return (
    <div className="w-full h-full  relative">
      <Image src={"/second.jpg"} alt="Spider" fill className="rounded-3xl" />
    </div>
  );
};

export default LeftSideImage;
