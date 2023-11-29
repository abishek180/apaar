import React from "react";
import Image from "next/image";
import assignment from "../Images/assignment.svg";
import attendance from "../Images/attendance.png";
import exam from "../Images/exam (1) 1.png";
import fee from "../Images/fee.svg";
import timetable from "../Images/time table.svg";
import study from "../Images/study.svg";
import rightarrow from "../Images/arrow-right-line.svg";

export const USP = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center lg:gap-12 gap-6 lg:mt-[150px] mt-14">
        <div className="w-[398px] md:w-[800px] lg:w-[1115px] ">
          <h1 className="font-extrabold  lg:text-[52px] md:text-[42px] text-[32px]">
            Automate your activity with Apaar school management system
          </h1>
        </div>
        <div className="text-darkslategray-300 lg:text-[20px] text-[16px]">
          <p>Assemble your team to tailor your experience</p>
        </div>
        <div className=" lg:flex lg:flex-row flex flex-col gap-[20px]">
          <div className="flex flex-row lg:gap-[20px] gap-[42px]">
            <div className="rounded-[16px] flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] lg:w-[172px] lg:h-[161px] w-[145px] h-[135px] hover:bg-gray-200">
              <Image
                className=" w-[55.873px] h-[55.873px]"
                src={attendance}
                alt="attendance"
              />
              <div className=" font-semibold ">Attendence</div>
            </div>
            <div className="rounded-[16px] flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] lg:w-[172px] lg:h-[161px] w-[145px] h-[135px] hover:bg-gray-200">
              <Image
                className=" rounded md:w-[57px] md:h-[62px] w-[55.873px] h-[55.873px]"
                src={assignment}
                alt="assignment"
              />
              <div className=" font-semibold ">Assignments</div>
            </div>
          </div>
          <div className="flex flex-row lg:gap-[20px] gap-[42px]">
            <div className="rounded-[16px] flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] lg:w-[172px] lg:h-[161px] w-[145px] h-[135px] hover:bg-gray-200">
              <Image
                className=" w-[55.873px] h-[55.873px]"
                src={exam}
                alt="exam"
              />
              <div className=" font-semibold ">Exam</div>
            </div>
            <div className=" rounded-[16px] flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] lg:w-[172px] lg:h-[161px] w-[145px] h-[135px] hover:bg-gray-200">
              <Image
                className=" w-[55.873px] h-[55.873px]"
                src={timetable}
                alt="timetable"
              />
              <div className=" font-semibold">Time Table</div>
            </div>
          </div>
          <div className="flex flex-row lg:gap-[20px] gap-[42px]">
            <div className="rounded-[16px] flex justify-center items-center flex-col gap-2.5 bg-[#F8F8F8] lg:w-[172px] lg:h-[161px] w-[145px] h-[135px] hover:bg-gray-200">
              <Image
                className=" w-[55.873px] h-[55.873px]"
                src={study}
                alt="study"
              />
              <div className=" font-semibold ">Study Room</div>
            </div>
            <div className="rounded-[16px]  flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] lg:w-[172px] lg:h-[161px] w-[145px] h-[135px] hover:bg-gray-200">
              <Image
                className=" w-[55.873px] h-[55.873px]"
                src={fee}
                alt="fee"
              />
              <div className=" font-semibold">Fee</div>
            </div>
          </div>
        </div>
        <div>
          <button className="flex gap-2 rounded-[15px] p-2 hover:bg-gray-300">
            <div className="font-semibold text-[16px] lg:text-[24px]">
              Click to View More
            </div>
            <Image
              className="w-[20px] h-[20px] lg:w-[24px] lg:h-[30px] "
              src={rightarrow}
              alt="rightarrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
