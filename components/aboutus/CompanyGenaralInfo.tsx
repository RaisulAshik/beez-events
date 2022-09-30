import React from "react";

const CompanyGenaralInfo = () => {
  return (
    <div className="flex flex-col items-center w-full mt-12">
      <div className="w-full max-w-7xl">
        {/* company picture and address */}
        <div className="flex flex-row w-full h-96">
          <div className="w-1/3 h-full border border-black">
            Office image goes here
          </div>
          <div className="w-2/3 h-full border border-black">
            office location and address and contact information
          </div>
        </div>
        {/* our team group pic and some tags  */}
        <div className="flex flex-row w-full mt-12 mb-12 h-96">
          <div className="w-2/3 h-full border border-black">
            Group picture of the team
          </div>
          <div className="w-1/3 h-full border border-black">
            something inspiring
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyGenaralInfo;
