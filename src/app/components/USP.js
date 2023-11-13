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
        <div className=" font-extrabold  text-[52px] leading-normal">
          Automate your activity with Apaar school management system
        </div>
        <div className=" text-darkslategray-300 opacity-[0.75] text-[20px]">
          Assemble your team to tailor your experience
        </div>

        <div className=" flex flex-row  gap-36">
          <div className="  flex justify-center items-center flex-col gap-2.5">
            <Image className=" rounded w-[57px] h-[62px]" src={attendance} />
            <div className=" font-semibold opacity-[0.75]">Attendence</div>
          </div>
          <div className=" flex justify-center items-center flex-col gap-2.5">
            <Image className=" rounded w-[57px] h-[62px]" src={assignment} />
            <div className=" font-semibold opacity-[0.75]">Assignments</div>
          </div>
          <div className="  flex justify-center items-center flex-col gap-2.5">
            <Image className=" rounded w-[57px] h-[62px]" src={exam} />
            <div className=" font-semibold opacity-[0.75]">Exam</div>
          </div>
          <div className=" flex justify-center items-center flex-col gap-2.5">
            <Image className=" rounded w-[57px] h-[62px]" src={timetable} />
            <div className=" font-semibold opacity-[0.75]">Time Table</div>
          </div>
          <div className="flex justify-center items-center flex-col gap-2.5">
            <Image className=" rounded w-[57px] h-[62px]" src={study} />
            <div className=" font-semibold opacity-[0.75]">Study Room</div>
          </div>
          <div className=" flex justify-center items-center flex-col gap-2.5">
            <Image className=" rounded w-[57px] h-[62px]" src={fee} />
            <div className=" font-semibold opacity-[0.75]">Fee</div>
          </div>
        </div>
        <div className=" flex gap-3">
          <div className="font-semibold opacity-[0.75] text-[24px]">
            Click to View More
          </div>
          <button>
            <Image className=" rounded w-[24px] h-[30px]" src={rightarrow} />
          </button>
        </div>
      </div>
    </div>
  );
};
