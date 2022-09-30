import Image from "next/image";
import React from "react";
import founderThumbnailPic from "../../assets/thumb_founder.jpg";
const MeetTheFounders = () => {
  return (
    <div className="flex flex-col w-full px-24">
      <p className="mx-auto text-6xl text-center font-cookie">
        Meet The Founders
      </p>
      {/* founder card */}
      <div className="relative w-full mb-4 bg-white border-4 border-black h-[500px]">
        <div className="flex flex-row w-full h-full p-12 mx-auto max-w-7xl ">
          {/* details div */}
          <div className="flex flex-col items-center justify-end w-2/3 h-full border border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-xl font-semibold text-end font-overlock">
                CEO
              </p>
              <div className="self-end w-2/3 pt-2 border-b-2 border-black"></div>
              <p className="self-end w-2/3 text-lg text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis deleniti quibusdam, ea, neque rerum eum nemo, est
                blanditiis vitae soluta officiis? Autem, aperiam laboriosam non
                reiciendis nam quibusdam natus explicabo.
              </p>
            </div>
          </div>
          {/* images div */}
          <div className="flex flex-col items-center justify-center w-1/3 h-full border border-black">
            {/* <Image
              src={founderThumbnailPic}
              // width="100%"
              // height="100%"
              // layout="responsive"
              className="object-contain w-full h-full"
            /> */}
          </div>
        </div>
      </div>

      {/* director card  */}
      <div className="relative w-full mb-4 bg-white border-4 border-black h-[500px]">
        <div className="flex flex-row w-full h-full p-12 mx-auto max-w-7xl ">
          {/* images div */}
          <div className="flex flex-col items-center justify-center w-1/3 h-full border border-black">
            {/* <Image
              src={founderThumbnailPic}
              // width="100%"
              // height="100%"
              // layout="responsive"
              className="object-contain w-full h-full"
            /> */}
          </div>
          {/* details div */}
          <div className="flex flex-col items-center justify-end w-2/3 h-full border border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-xl font-semibold text-start font-overlock">
                Director
              </p>
              <div className="self-start w-2/3 pt-2 border-b-2 border-black"></div>
              <p className="self-start w-2/3 text-lg text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis deleniti quibusdam, ea, neque rerum eum nemo, est
                blanditiis vitae soluta officiis? Autem, aperiam laboriosam non
                reiciendis nam quibusdam natus explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheFounders;
