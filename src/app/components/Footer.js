import React from "react";
import Image from "next/image";
import facebook from "../Images/facebook.svg";
import twitter from "../Images/twitter.svg";
import linkdin from "../Images/linkdin.svg";
import copyright from "../Images/copyright.svg";

export const Footer = () => {
  return (
    <div className=" bg-[#0F1420]  text-white px-[25px] py-[60px] md:pt-[100px] md:pr-[129px] md:pb-[85px] md:pl-[103px]">
      <div className="flex flex-col md:flex md:flex-row md:justify-between mb-5">
        <div className="">
          <div className=" text-[32px] font-black ">APAAR</div>
          <div className=" font-plus-jakarta-sans ">
            <p className="w-[268px] mt-2">
              All-in-One Platform for Academic Automation and Resolution.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-[13.74px] md:text-[20.61px] text-[16px] md:mt-0 mt-10">
          <div className="font-medium ">Home</div>
          <div className=" font-medium">Features</div>
          <div className="font-medium">About Us</div>
          <div className=" font-medium text-center">Contact Us</div>
          <div className=" font-medium text-center">Testimonials</div>
          <div className=" font-medium text-center">Blog</div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-[13.74px] md:text-[20.61px] text-[16px] md:mt-0 mt-10">
          <div className=" font-medium">Support</div>
          <div className="font-medium">FAQ</div>
          <div className="font-medium">Privacy Policy</div>
          <div className=" font-medium">Terms of Services</div>
          <div className=" font-medium">Log In</div>
          <div className=" font-medium">Request a Demo</div>
        </div>
      </div>
      <hr />
      <div className="mt-5 md:flex md:flex-row md:justify-between flex flex-col">
        <p className="text-[16px] md:flex flex justify-center">
          <Image
            src={copyright}
            alt="copyright"
            className="w-[13.26821px] md:mb-3"
          />
          Copyright Apaar 2023.
          <span className="md:block hidden">All rights reserved</span>
        </p>
        <div className="flex gap-2 justify-center md:mt-0 mt-5">
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={linkdin} alt="linkdin" />
        </div>
      </div>
    </div>
  );
};
