import React from "react";
import Image from "next/image";
import nmsdubai from "../Images/Rectangle.png";
import oxford from "../Images/oxford.png";
import layer from "../Images/ace.png";

export const Client = () => {
  return (
    <div>
      <div className=" md:text-[24px] text-[12px] leading-normal  lg:mt-[150px] mt-16 flex justify-center gap-1">
        <span className="text-gray-700 font-normal">Our Trusted</span><span className="font-bold  text-[#000]">Users</span>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-evenly lg:gap-[115.082px] gap-5 lg:mt-20 mt-8 flex flex-col text-[#858585]">
        <div className="flex flex-row justify-evenly lg:gap-[115.082px] ">
          <div className="flex mr-8 lg:mr-0">
            <Image src={nmsdubai} alt="nmsdubai" className="lg:w-[67.77px] lg:h-[70.328px] w-[43.369px] h-[45.005px]"/>
            <div>
              <p className=" lg:text-[38.361px] text-[24.548px] font-bold">NIMS</p>
              <p className=" lg:text-[21.738px] text-[13.911px] font-bold">DUBAI</p>
            </div>
          </div>
          <div className="flex">
            <Image src={layer} alt="ace" className=" lg:w-[98.051px] lg:h-[77.239px] w-[71.189px] h-[48.324px]"/>
            <div>
              <p className=" lg:text-[51.995px] text-[32.53px]">ACE</p>
              <p className="lg:text-[8.09px] text-[5.061px] ">
                College of Engineering
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around lg:gap-[115.082px] lg:mt-0 my-4 text-[#858585]">
          <div className="flex ml-4 lg:ml-0 ">
            <Image src={oxford} alt="oxford" className="lg:w-[72.885px] lg:h-[78px] w-[42.984px] h-[46px]" />
            <div className="mt-3 ">
              <p className="lg:text-[20.459px] text-[12.066px] font-extrabold">
                OXFORD SCHOOL
              </p>
              <p className="lg:text-[16.623px] text-[9.803px] font-bold">CALICUT</p>
            </div>
          </div>
          <div className="flex">
            <Image src={oxford} alt="oxford" className="lg:w-[72.885px] lg:h-[78px] w-[42.984px] h-[46px]"/>
            <div className="mt-3">
              <p className=" lg:text-[20.459px] text-[12.066px] font-extrabold">
                OXFORD SCHOOL
              </p>
              <p className=" lg:text-[16.623px] text-[9.803px] font-bold">
                TRIVANDRUM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
