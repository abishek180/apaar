import React from "react";
import Image from "next/image";
import facebook from "../Images/facebook.svg";
import twitter from "../Images/twitter.svg";
import linkdin from "../Images/linkdin.svg";
import copyright from "../Images/copyright.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" bg-[#0F1420]  text-white px-[25px] pt-[60px] pb-5 md:px-[25px] md:py-[60px] lg:pt-[100px] lg:pb-[12px]">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex md:flex-row md:justify-between mb-5">
        <div>
          <div className=" text-[32px] font-black ">APAAR</div>
          <div className=" font-plus-jakarta-sans ">
            <p className="w-[268px] mt-2">
              All-in-One Platform for Academic Automation and Resolution.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-[13.74px] md:text-[20.61px] text-[16px] md:mt-0 mt-10">
          <Link href="/" className="font-medium text-[16px]">
            Home
          </Link>
          <div className=" font-medium text-[16px]">Features</div>
          <div className="font-medium text-[16px]">About Us</div>
          <Link href="/components/Myform" className=" font-medium text-[16px]">
            Contact Us
          </Link>
          <div className=" font-medium text-[16px]">Testimonials</div>
          <div className=" font-medium text-[16px]">Blog</div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-[13.74px] md:text-[20.61px] text-[16px] md:mt-0 mt-10">
          <div className=" font-medium text-[16px]">Support</div>
          <div className="font-medium text-[16px]">FAQ</div>
          <div className="font-medium text-[16px]">Privacy Policy</div>
          <div className=" font-medium text-[16px]">Terms of Services</div>
          <Link href="/components/Myform" className=" font-medium text-[16px]">
            Log In
          </Link>
          <Link href="/components/Myform" className=" font-medium text-[16px]">
            Request a Demo
          </Link>
        </div>
      </div>
      <hr />
      <div className="max-w-screen-lg mx-auto md:mt-5 mt-3 md:flex md:flex-row md:justify-between flex flex-col">
        <p className="text-[16px] md:flex flex justify-center ">
          <Image
            src={copyright}
            alt="copyright"
            className="w-[13.26821px] md:mb-3"
          />
          Copyright Apaar 2023.
          <span className="md:block hidden">All rights reserved</span>
        </p>
        <div className="flex gap-2 justify-center md:mt-0 mt-3">
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={linkdin} alt="linkdin" />
        </div>
      </div>
    </div>
  );
};
