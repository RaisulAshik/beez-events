import React from "react";
import Image from "next/image";
import deviderType3 from "../../assets/deviderType3.png";
import deviderType2 from "../../assets/deviderType2.png";
import deviderType1 from "../../assets/deviderType1.png";

interface IDeviderProps {
  type: "deviderType1" | "deviderType2" | "deviderType3";
}

const Devider = ({ type }: IDeviderProps) => {
  let deviderImg;
  if (type === "deviderType1") {
    deviderImg = <Image src={deviderType1} width={250} height={25} />;
  } else if (type === "deviderType2") {
    deviderImg = <Image src={deviderType2} width={250} height={25} />;
  } else if (type === "deviderType3") {
    deviderImg = <Image src={deviderType3} width={250} height={25} />;
  }
  return (
    <div className="flex flex-row items-center justify-center py-8 mx-auto max-w-7xl">
      {deviderImg}
    </div>
  );
};

export default Devider;
