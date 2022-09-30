import React from "react";
import Image from "next/image";

import deviderType2 from "../../assets/deviderType2.png";

const DeviderType2 = () => {
  return (
    <div className="flex flex-row items-center justify-center py-8 mx-auto max-w-7xl">
      <Image src={deviderType2} width={250} height={25} />;
    </div>
  );
};

export default DeviderType2;
