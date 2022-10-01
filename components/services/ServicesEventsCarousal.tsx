import React from "react";

const ServicesEventsCarousal = () => {
  return (
    <div className="flex flex-col w-full px-24 mt-32">
      <div className="relative w-full mb-4 bg-white border-4 border-black h-[500px]">
        <div className="flex flex-col items-start justify-start px-12 h-1/6 max-w-7xl">
          <p className="p-8 text-2xl font-sacramento">Sub Events</p>
        </div>
        <div className="flex flex-row w-full p-12 mx-auto h-5/6 max-w-7xl ">
          {/* images div */}
          <div className="flex flex-col items-center justify-center w-1/3 h-full border border-black">
            event thumbNail
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
              <p className="text-xl font-semibold text-end font-overlock">
                Event name
              </p>
              <div className="self-end w-2/3 pt-2 border-b-2 border-black"></div>
              <p className="self-end w-2/3 text-lg text-right">
                Event Details Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Corporis deleniti quibusdam, ea, neque rerum eum nemo, est
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

export default ServicesEventsCarousal;
