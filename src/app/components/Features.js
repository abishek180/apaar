import React from "react";
import Image from "next/image";
import dashboard2 from "../Images/dashboard2.png";
import dashboard3 from "../Images/dashboard3.png";
import exampaper from "../Images/Exam Paper.svg";
import dollar from "../Images/money-dollar-circle-fill.svg";

export const Features = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className=" text-[52px] font-extrabold  w-[926px] leading-normal">
          Transforming Education One Feature at a Time
        </div>

        <div className=" text-xl font-medium text-darkslategray-300 opacity-[0.75]">
          Empowering educators and students with innovative tools and resources
        </div>

        <div className=" rounded-[60px] bg-neutral-white flex flex-row items-start justify-start p-3 gap-[10px]  ">
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
        </div>
      </div>

      {/* <div class="w-full">
        <div class="relative right-0">
          <ul
            class="relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1"
            data-tabs="tabs"
            role="list"
          >
            <li class="z-30 flex-auto text-center">
              <a
                class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                data-tab-target=""
                active
                role="tab"
                aria-selected="true"
              >
                <span class="ml-1">HTML</span>
              </a>
            </li>
            <li class="z-30 flex-auto text-center">
              <a
                class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                data-tab-target=""
                role="tab"
                aria-selected="false"
              >
                <span class="ml-1">React</span>
              </a>
            </li>
            <li class="z-30 flex-auto text-center">
              <a
                class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg bg-black border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                data-tab-target=""
                role="tab"
                aria-selected="false"
              >
                <span class="ml-1">Vue</span>
              </a>
            </li>
            <li class="z-30 flex-auto text-center">
              <a
                class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                data-tab-target=""
                role="tab"
                aria-selected="true"
              >
                <span class="ml-1">Angular</span>
              </a>
            </li>
            <li class="z-30 flex-auto text-center">
              <a
                class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
                data-tab-target=""
                role="tab"
                aria-selected="true"
              >
                <span class="ml-1">Svelte</span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="  flex  justify-evenly mt-20 p-6">
        <div className="w-[608px] h-[635px] rounded-3xl [background:linear-gradient(180deg,_#fff,_#ebf4ff)]  border-[1px] border-solid border-gainsboro-200 p-5">
          <div className=" w-[70px] h-70px rounded-[16px] flex justify-center items-center px-3 py-3 [background:linear-gradient(180deg,_#CFDDDB_0%,_#C0DAD6_100%)]">
            <Image className="w-[47px] h-[47px]" src={exampaper} />
          </div>
          <div className=" font-semibold text-[28px] mt-5">
            Exam and Attendance Tracking
          </div>
          <div className=" text-[20px] font-medium text-dimgray-200 mt-4">
            <p className="m-0">
              Students can view exam marks, attendance records,and detailed
              reports for academic progress.
            </p>
          </div>
          <Image src={dashboard2} />
        </div>
        <div className="w-[608px] h-[635px] rounded-3xl [background:linear-gradient(180deg,_#fff_36.66%,_#fff9e1)]  border-[1px] border-solid border-gainsboro-200 p-5">
          <div className="[background:linear-gradient(180deg,_#FDE5DC_0%,_#FFDBCE_100%)] w-[70px] h-70px rounded-[16px] flex justify-center items-center px-3 py-3">
            <Image className="w-[47px] h-[47px]" src={dollar} />
          </div>
          <div className=" font-semibold text-[28px] mt-5">
            Comprehensive Fee Management
          </div>
          <div className=" text-[20px] font-medium text-dimgray-200 mt-4">
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
