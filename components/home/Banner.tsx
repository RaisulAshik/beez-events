import React from "react";
import Image from "next/image";
import homecover from "../../assets/cover.jpg";
const Banner = () => {
  return (
    <div className="max-h-[calc(100vh_-_200px)] flex flex-col items-center justify-center w-full ">
      <Image src={homecover} className="object-cover w-full h-full" />
    </div>
  );
};

export default Banner;
