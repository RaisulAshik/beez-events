import Image from "next/image";
import React from "react";
import introaboutender from "../../assets/introaboutender.jpeg";
import devider1 from "../../assets/deviderType1.png";
const IntroAbout = () => {
  return (
    <div className="w-full bg-[#fcf3ea] h-[calc(40vh)] flex flex-col items-center justify-start mx-auto">
      <div className="w-full h-full max-w-7xl">
        <div className="relative w-full h-full ">
          <div className="flex flex-col items-center justify-center w-full pt-24 h-2/3">
            <p className="p-8 pt-0 text-4xl font-medium tracking-widest text-center font-great_vibes md:text-4xl lg:text-5xl">
              Where Your Dreames Becomes Reality
            </p>
          </div>
          <div className="flex flex-row items-center justify-center py-8 mx-auto max-w-7xl h-1/3">
            <Image src={devider1} width={300} height={50} className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
