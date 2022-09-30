import React from "react";
import Image from "next/image";
import deviderType3 from "../../assets/deviderType3.png";
import deviderType2 from "../../assets/deviderType2.png";
import deviderType1 from "../../assets/deviderType1.png";

// interface IDeviderProps {
//   type: "deviderType1" | "deviderType2" | "deviderType3";
// }

const Devider = () => {
  return (
    <div className="flex flex-row items-center justify-center py-8 mx-auto max-w-7xl">
      <Image src={deviderType3} />
    </div>
  );
};

export default Devider;
