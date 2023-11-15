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
      <div className=" flex flex-col justify-center items-center text-center gap-12 mt-[150px]">
        <div>
          <h1 className="font-extrabold  md:text-[52px] sm:text-[32px] leading-normal">
            Automate your activity with Apaar school management system
          </h1>
        </div>
        <div className=" text-darkslategray-300 opacity-[0.75] md:text-[20px] sm:text-[16px]">
          <p>Assemble your team to tailor your experience</p>
        </div>

        <div className=" md:flex md:flex-row flex flex-col gap-[42px]">
          <div className="flex flex-row gap-[42px]">
            <div className="  flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] px-[23.704px] py-[25.397px] md:px-[30px] md:py-[68px]">
              <Image className="  md:w-[57px] md:h-[62px] w-[55.873px] h-[55.873px]" src={attendance} />
              <div className=" font-semibold ">Attendence</div>
            </div>
            <div className=" flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] px-[23.704px] py-[25.397px] md:px-[30px] md:py-[68px]" >
              <Image className=" rounded w-[57px] h-[62px] w-[55.873px] h-[55.873px]" src={assignment} />
              <div className=" font-semibold ">Assignments</div>
            </div>
          </div>
          <div className="flex flex-row md:gap-[42px] gap-[76px]">
            <div className="  flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] px-[23.704px] py-[25.397px] md:px-[30px] md:py-[68px]">
              <Image className=" md:w-[57px] md:h-[62px] w-[55.873px] h-[55.873px]" src={exam} />
              <div className=" font-semibold ">Exam</div>
            </div>
            <div className=" flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] px-[23.704px] py-[25.397px] md:px-[30px] md:py-[68px]">
              <Image className="md:w-[57px] md:h-[62px] w-[55.873px] h-[55.873px]" src={timetable} />
              <div className=" font-semibold">Time Table</div>
            </div>
          </div>
          <div className="flex flex-row md:gap-[42px] gap-[55px]">
            <div className="flex justify-center items-center flex-col gap-2.5 bg-[#F8F8F8] px-[23.704px] py-[25.397px] md:px-[30px] md:py-[68px]">
              <Image className="md:w-[57px] md:h-[62px] w-[55.873px] h-[55.873px]" src={study} />
              <div className=" font-semibold ">Study Room</div>
            </div>
            <div className=" flex justify-center items-center flex-col gap-2.5  bg-[#F8F8F8] px-[23.704px] py-[25.397px] md:px-[30px] md:py-[68px]">
              <Image className=" md:w-[57px] md:h-[62px] w-[55.873px] h-[55.873px]" src={fee} />
              <div className=" font-semibold">Fee</div>
            </div>
          </div>
        </div>
        <div className=" flex gap-2">
          <div className="font-semibold text-[16px] md:text-[24px]">
            Click to View More
          </div>
          <button>
            <Image className="w-[20px] h-[20px] md:w-[24px] md:h-[30px]" src={rightarrow} />
          </button>
        </div>
      </div>
    </div>
  );
};
