import React from "react";

export const Business = () => {
  return (
    <div>
      <div className=" bg-[#D3DFDE] text-left px-[25px] py-[60px] md:pt-[100px] md:pr-[129px] md:pb-[85px] md:pl-[103px] md:mt-40 mt-14">
        <div className="md:flex md:flex-row flex flex-col ">
          <p className="md:text-[38px] text-[32px] leading-normal font-bold ">
            Maximize Your Time, Minimize Administrative Burdens with Apaar
          </p>
          <div className=" leading-normal font-semibold  md:mt-0 mt-4">
            <p className=" text-[16px] ">
              Discover how institutions of all sizes are leveraging Apaar
              automated school management platform to create value.
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <div className="md:flex md:flex-row md:justify-between md:items-center flex flex-col font-plus-jakarta-sans   ">
            <div className=" leading-normal w-[313px;] ">
              <p className="text-[65px] font-bold">40%</p>
              <p className="text-[11.54px] md:w-[210px] w-[301px]">
                Reduction in administrative tasks, leading to increased job
                satisfaction and a more positive work environment.
              </p>
            </div>
            <div className=" leading-normal w-[313px;] ">
              <p className="text-[65px] font-bold">86%</p>
              <p className="text-[11.54px] md:w-[250px] w-[301px]">
                of school employees using Benchmark Manager Lite reported a
                boost in productivity, enabling them to focus on strategic tasks
                and professional development.
              </p>
            </div>
            <div className=" leading-normal w-[313px;] ">
              <p className="text-[65px] font-bold">88%</p>
              <p className="text-[11.54px] md:w-[230px] w-[301px]">
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
