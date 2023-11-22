"use client";
import React from "react";
import Image from "next/image";
import sidedashboard from "../../Images/sidedashboard.png";
import { Button } from "reactstrap";
export default function page() {
  return (
    <div className="lg:flex lg:justify-center lg:items-center h-screen mx-auto">
      <div className="flex flex-col md:flex md:flex-row md:justify-center md:items-center shadow-[-4px_0px_41px_0px_rgba(8,_10,_9,_0.11)] md:w-[900px] md:h-[742px] w-[400px] h-[730px]  rounded-[30px] bg-gray-300">
        <div className="w-[400px] h-[90px] md:w-[394px] md:h-[742px] bg-[#2C2C2C] md:flex md:flex-col md:justify-center  md:items-center md:rounded-l-[30px]">
          <Image
            src={sidedashboard}
            alt="dashboard"
            className="hidden md:block w-[330px] h-[390px] ml-12"
          />
          <div className="w-[314px] h-[90px] md:flex md:justify-center md:items-left md:ml-16 md:pt-12 md:pl-0 pl-7 pt-6">
            <h1 className="md:text-[24px] text-[16px] font-semibold text-[#FFF]">All-in-One Platform for Academic Automation and Resolution.</h1>
          </div>
        </div>
        <div className="md:p-[60px] p-[24px] flex justify-center items-center md:w-[600px] w-[400px]">
          <form class="">
            <div className="">
              <p className="text-[#060606] text-[24px] md:text-[32px] font-extrabold">
                Digitize your school in minutes with Apaar integrated platform
              </p>
            </div>
            <div class="mb-6 mt-10">
              <div class="w-full  mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Your Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[11px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"YOUR NAME
                  placeholder="Enter  Your Name"
                />
              </div>
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Select your organization type
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[11px] py-3 px-4 leading-tight"
                  id="grid-last-name"
                  type="radio"
                />
              </div>
            </div>
            <div class=" mb-6">
              <div class="w-full ">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-school"
                >
                  Name of your School
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[11px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-school"
                  type="text"
                  placeholder="eg: NIMS School Dubai"
                />
              </div>
            </div>
            <div class="flex gap-3 mb-2">
              <div class="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                  for="grid-number"
                >
                  Your Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[11px] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="text"
                  placeholder="+971-XX-1234567"
                />
              </div>

              <div class="w-full md:w-1/2  mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                  for="grid-role"
                >
                  Your role in the school
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight rounded-[11px] focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-role"
                  type="text"
                  placeholder="-Select Your Role-"
                />
              </div>
            </div>
            <div className="mt-10">
              <Button className="px-[64px] py-[17px] bg-[#2C2C2C] rounded-[12px] text-[20px] font-bold text-[#FFFFFF] md:w-[400px] w-[382px] hover:bg-black">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
