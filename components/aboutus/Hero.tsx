import React from "react";
import Image from "next/image";
import aboutusheroImg from "../../assets/about-us-hero.jpg";
const Hero = () => {
  return (
    <div className="h-[calc(100vh_-_300px)] w-full flex flex-col items-center justify-center border border-black mt-1">
      <Image
        src={aboutusheroImg}
        className="object-center w-full h-full "
        alt=""
      />
    </div>
  );
};

export default Hero;
