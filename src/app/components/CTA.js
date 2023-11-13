import React from "react";

export const CTA = () => {
  return (
    <div>
      <div className=" rounded-lg bg-gray-100 flex flex-col justify-center items-center text-center mt-32 gap-6">
        <p className=" text-[38px]  text-black font-bold">Elevate your scheduling</p>
        <div className=" font-medium  opacity-[0.75]">
          <p className="text-[16px]">
            Start using the best school management software platform now- and
            it's free!
          </p>
        </div>
        <div className="flex  gap-5">
          <button className="rounded-[15px] bg-[#2C2C2C] flex  items-center justify-center py-6 px-16 font-semibold text-white">
            Schedule a demo
          </button>
          <button className="rounded-[15px] bg-neutral-white flex  items-center justify-center py-6 px-16 text-black border-[1px] border-solid border-lightgray font-semibold">
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
};
