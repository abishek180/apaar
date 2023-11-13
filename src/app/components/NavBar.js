import React from "react";

export const NavBar = () => {
  return (
    <div>
      <div className="flex justify-around gap-[300px] mt-3">
        <div className="flex gap-12">
          <div className=" font-black text-2xl">APAAR</div>
          <div className=" text-darkslategray-300 font-poppins flex gap-10 ">
            <div className=" leading-[28px] font-medium">Product</div>
            <div className=" leading-[28px] font-medium">Home</div>
            <div className=" leading-[28px] font-medium">Contact Us</div>
            <div className=" leading-[28px] font-medium">About Us</div>
          </div>
        </div>
        <button className=" rounded-[8px] bg-[#090909]  items-center justify-center py-3.5 px-8 text-neutral-white font-plus-jakarta-sans text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};
