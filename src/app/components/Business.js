import React from "react";

export const Business = () => {
  return (
    <div>
      <div className=" bg-[#D3DFDE] text-left px-[25px] py-[60px] lg:pt-[100px] lg:pr-[129px] lg:pb-[85px] lg:pl-[103px] lg:mt-40 mt-14 max-w-screen-2xl">
        <div className="lg:flex lg:flex-row flex flex-col ">
          <p className="lg:text-[38px] text-[32px] font-bold ">
            Maximize Your Time, Minimize Administrative Burdens with Apaar
          </p>
          <div className=" leading-normal font-semibold  lg:mt-0 mt-4">
            <p className=" text-[16px] ">
              Discover how institutions of all sizes are leveraging Apaar
              automated school management platform to create value.
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <div className="flex flex-col font-plus-jakarta-sans md:flex md:flex-row md:justify-between md:items-center">
            <div className=" leading-normal w-[313px;] ">
              <p className="text-[65px] font-bold">40%</p>
              <p className="text-[11.54px] md:w-[210px] w-[301px]">
                Reduction in administrative tasks, leading to increased job
                satisfaction and a more positive work environment.
              </p>
            </div>
            <div className=" leading-normal w-[313px;] ">
              <p className="text-[65px] font-bold">86%</p>
              <p className="text-[11.54px] lg:w-[250px] md:w-[220px] w-[301px]">
                of school employees using Benchmark Manager Lite reported a
                boost in productivity, enabling them to focus on strategic tasks
                and professional development.
              </p>
            </div>
            <div className=" leading-normal w-[313px;] ">
              <p className="text-[65px] font-bold">88%</p>
              <p className="text-[11.54px] lg:w-[230px] md:w-[150px] w-[301px]">
                of school employees saved 30% more time by reducing paperwork,
                enabling increased focus on student support and collaboration{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
