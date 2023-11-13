import React from "react";
import google22 from "../Images/google.png";
import dashboard from "../Images/dashboard.png";
import Image from "next/image";
import rightline from "../Images/right-outline.svg";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-10 gap-10">
        <div className=" text-[58px] font-extrabold text-gray1-700 w-[1074px]">
          All-in-One Platform for Academic Automation and Resolution.
        </div>
        <div className=" text-xl leading-[157%] font-medium text-darkslategray-300  opacity-[0.75] w-[901px]">
          Seamlessly managing academic tasks, student records, and communication
          channels, APAAR empowers schools to focus on what truly matters -
          education.
        </div>
        <div>
          <button className="flex rounded-lg bg-[#2C2C2C] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.13)]  items-center justify-center py-4 px-6 gap-2 text-white text-[24px]">
            Get started. It’s for
            <span className="text-[26px] text-orange-300">FREE</span>
            <div className="rounded-[50px] bg-white w-[27px] h-[27px] text-center justify-center flex">
              <Image src={rightline} />
            </div>
          </button>
        </div>
        <div>
          <Image src={google22} />
        </div>
        <div>
          <Image src={dashboard} />
        </div>
      </div>
    </div>
  );
};
