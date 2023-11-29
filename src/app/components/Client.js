import React from "react";
import Image from "next/image";
import nmsdubai from "../Images/nimsdubai.png";
import oxford from "../Images/oxfordcalicut.png";
import oxford1 from "../Images/oxfordtrivandrum.png";
import layer from "../Images/ace college.png";

export const Client = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className=" md:text-[24px] text-[12px] leading-normal  lg:mt-[150px] mt-16 flex justify-center gap-1">
        <span className="text-gray-700 font-normal">Our Trusted</span>
        <span className="font-bold  text-[#000]">Users</span>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[100.082px] gap-5 lg:mt-20 mt-8 flex flex-col text-[#858585]">
        <div className="flex flex-row justify-around lg:gap-[115.082px] md:gap-">
          <div className="flex">
            <Image
              src={nmsdubai}
              alt="nmsdubai"
              className="lg:w-[195.77px] lg:h-[70.328px] w-[113.369px] h-[45.005px]"
            />
          </div>
          <div className="flex">
            <Image
              src={layer}
              alt="ace"
              className=" lg:w-[229.051px] lg:h-[77.239px] w-[121.189px] h-[48.324px]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-around lg:gap-[115.082px]  lg:mt-0 my-4 text-[#858585]">
          <div className="flex ml-4 lg:ml-0 ">
            <Image
              src={oxford}
              alt="oxford"
              className="lg:w-[245px] lg:h-[65px] w-[132.984px] h-[46px]"
            />
          </div>
          <div className="flex">
            <Image
              src={oxford1}
              alt="oxford"
              className="lg:w-[245px] lg:h-[65px] w-[132.984px] h-[46px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
