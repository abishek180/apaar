import React from "react";

export const CTA = () => {
  return (
    <div>
      <div className=" rounded-lg bg-gray-100 flex flex-col justify-center items-center text-center mt-32 gap-6">
        <p className=" md:text-[38px] text-[24px] text-black font-bold">
          Elevate your scheduling
        </p>
        <div className=" font-medium">
          <p className="text-[16px] w-[348px] md:w-[450px]">
            Start using the best school management software platform now- and
            its free!
          </p>
        </div>
        <div className="md:flex md:flex-row sm:flex sm:flex-col  gap-5">
          <button className="rounded-[4.9px] md:rounded-[15px] bg-[#2C2C2C] flex  items-center justify-center py-[16px] px-[29.4px] md:py-6 md:px-16 font-semibold text-white cursor-pointer hover:bg-black">
            Schedule a demo
          </button>
          <div className="mt-4 md:mt-0 flex justify-center">
            <button className="rounded-[4.9px] md:rounded-[15px] bg-white flex  items-center justify-center py-[16px] px-[29.4px] md:py-6 md:px-16 text-black border-[1px] border-solid border-lightgray font-semibold cursor-pointer  hover:text-green-400 hover:border-1 hover:border-solid hover:border-green-400">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
