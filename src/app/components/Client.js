import React from "react";
import Image from "next/image";
import nmsdubai from "../Images/NIMS_Dubai_Logo 1.png";
import oxford from "../Images/oxford-school 1.png";
import layer from "../Images/Layer_x0020_1.svg";

export const Client = () => {
  return (
    <div>
      <div className=" md:text-[24px] sm:text-[16px] font-bold leading-normal  mt-[150px] flex justify-center">
        <span>Our Trusted Users</span>
      </div>
      <div className="flex justify-evenly md:gap-[115.082px] gap-5 mt-20">
        <div className="md:flex md:justify-around md:gap-[115.082px]">
          <div className="flex">
            <Image src={nmsdubai} className="md:w-[67.77px] md:h-[70.328px] w-[43.369px] h-[45.005px]"/>
            <div>
              <p className="text-[#113299] md:text-[38.361px] text-[24.548px] font-bold">NIMS</p>
              <p className="text-[#000] md:text-[21.738px] text-[13.911px] font-bold">DUBAI</p>
            </div>
          </div>
          <div className="flex md:mt-0 mt-10">
            <Image src={layer} className="md:w-[98.051px] md:h-[77.239px] w-[71.189px] h-[48.324px]"/>
            <div>
              <p className="text-[#113299] md:text-[51.995px] text-[32.53px]">ACE</p>
              <p className="md:text-[8.09px] text-[5.061px] text-[#113299]">
                College of Engineering
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-around md:gap-[115.082px]">
          <div className="flex">
            <Image src={oxford} className="md:w-[72.885px] md:h-[78px] w-[42.984px] h-[46px]" />
            <div className="mt-3">
              <p className="text-[#113299] md:text-[20.459px] text-[12.066px] font-extrabold">
                OXFORD SCHOOL
              </p>
              <p className="text-[#000] md:text-[16.623px] text-[9.803px] font-bold">CALICUT</p>
            </div>
          </div>
          <div className="flex md:mt-0 mt-10">
            <Image src={oxford} className="md:w-[72.885px] md:h-[78px] w-[42.984px] h-[46px]"/>
            <div className="mt-3">
              <p className="text-[#113299] md:text-[20.459px] text-[12.066px] font-extrabold">
                OXFORD SCHOOL
              </p>
              <p className="text-[#000] md:text-[16.623px] text-[9.803px] font-bold">
                TRIVANDRUM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
