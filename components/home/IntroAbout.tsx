import Image from "next/image";
import React from "react";
import introaboutender from "../../assets/introaboutender.jpeg";
const IntroAbout = () => {
  return (
    <div className="w-full bg-[#fcf3ea] h-[calc(50vh)] ">
      <div className="h-full max-w-7xl">
        <p>IntroAbout beesz events and there tagline</p>
        <div className="w-[300px] h-[94px]">
          <Image
            src={introaboutender}
            alt="introaboutender"
            className="items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
