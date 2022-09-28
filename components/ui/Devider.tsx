import React from "react";
import Image from "next/image";
import deviderType3 from "../../assets/deviderType3.png";
const Devider = () => {
  return (
    <div className="flex flex-row items-center justify-center py-8 mx-auto max-w-7xl">
      <Image src={deviderType3} width="250" height="25" />
    </div>
  );
};

export default Devider;
