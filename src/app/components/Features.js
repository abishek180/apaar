import React from "react";
import Image from "next/image";
import dashboard2 from "../Images/dashboard2.png";
import dashboard3 from "../Images/dashboard3.png";
import exampaper from "../Images/Exam Paper.svg";
import dollar from "../Images/money-dollar-circle-fill.svg";

export const Features = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-10 mt-20">
        <div className="md:w-[926px] w-[382px]">
          <h1 className="md:text-[52px] font-extrabold leading-normal sm:text-[16px]">
            Transforming Education One Feature at a Time
          </h1>
        </div>
        <div>
          <p className="md:text-xl font-medium sm:text-[16px]">
            Empowering educators and students with innovative tools and
            resources
          </p>
        </div>
        {/* <div className=" rounded-[60px] bg-neutral-white flex flex-row items-start justify-start p-3 gap-[10px]  ">
          <div className="rounded-[30px] bg-black  items-start justify-start py-4 px-12 text-white">
            <p className=" font-semibold text-[24px]">All teams</p>
          </div>
          <div className="rounded-11xl flex flex-col items-start justify-start py-4 px-12">
            <p className=" font-semibold text-[24px] text-dimgray-100">
              All teams
            </p>
          </div>
          <div className="rounded-11xl flex flex-col items-start justify-start py-4 px-12">
            <p className=" font-semibold text-[24px] text-dimgray-100">
              All teams
            </p>
          </div>
          <div className="rounded-11xl flex flex-col items-start justify-start py-4 px-12">
            <p className=" font-semibold text-[24px] text-dimgray-100">
              All teams
            </p>
          </div>
        </div> */}
      </div>
      <div className="md:flex md:flex-row md:justify-evenly md:mt-10 md:p-6 sm:flex sm:flex-col">
        <div className="md:w-[608px] md:h-[635px] w-[383px] h-[403px] rounded-3xl [background:linear-gradient(180deg,_#fff,_#ebf4ff)]  border-[1px] border-solid border-gainsboro-200 p-5">
          <div className="md:w-[70px] md:h-[70px] w-[44.441px] h-[44.441px] rounded-[16px] flex justify-center items-center px-3 py-3 [background:linear-gradient(180deg,_#CFDDDB_0%,_#C0DAD6_100%)]">
            <Image className="md:w-[47px] md:h-[47px] w-[29.839px] h-[29.839px]" src={exampaper} />
          </div>
          <div className=" font-semibold md:text-[28px] sm:text-[16px] mt-5">
            <p>Exam and Attendance Tracking</p>
          </div>
          <div className="md:text-[20px] sm:text-[14px] font-medium text-dimgray-200 mt-4">
            <p className="m-0">
              Students can view exam marks, attendance records,and detailed
              reports for academic progress.
            </p>
          </div>
          <Image src={dashboard2} />
        </div>
        <div className="md:w-[608px] md:h-[635px] w-[383px] h-[403px] rounded-3xl [background:linear-gradient(180deg,_#fff_36.66%,_#fff9e1)]  border-[1px] border-solid border-gainsboro-200 p-5">
          <div className="md:w-[70px] md:h-[70px] w-[44.441px] h-[44.441px] [background:linear-gradient(180deg,_#FDE5DC_0%,_#FFDBCE_100%)]  rounded-[16px] flex justify-center items-center px-3 py-3">
            <Image className="w-[29.839px] h-[29.839px] md:w-[47px] md:h-[47px]" src={dollar} />
          </div>
          <div className=" font-semibold md:text-[28px] sm:text-[16px] mt-5">
            <p>Comprehensive Fee Management</p>
          </div>
          <div className="md:text-[20px] sm:text-[14px] font-medium text-dimgray-200 mt-4">
            <p>
              Fee collection and tracking with automated billing, online
              payments, and customizable fee structures
            </p>
          </div>
          <Image src={dashboard3} />
        </div>
      </div>
    </div>
  );
};
