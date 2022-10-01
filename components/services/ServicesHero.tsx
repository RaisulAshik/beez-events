import React from "react";
import Image from "next/image";
import serviceHeroImg from "../../assets/service-hero.jpg";
const ServiceHero = () => {
  return (
    <div className="h-[calc(100vh_-_300px)] w-full flex flex-col items-center justify-center border border-black mt-1">
      <Image
        src={serviceHeroImg}
        className="object-cover w-full h-full "
        alt=""
      />
    </div>
  );
};

export default ServiceHero;
