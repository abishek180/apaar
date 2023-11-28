import React, { useState } from "react";
import Image from "next/image";
import down from "../Images/down.svg";
import menu from "../Images/menu.svg";
import close from "../Images/close.svg";
import { motion } from "framer-motion";
import Link from "next/link";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" bg-white fixed top-0 w-full z-10">
      <div className="max-w-screen-lg mx-auto lg:flex lg:justify-around lg:gap-[180px] lg:mt-3">
        <div className="lg:flex lg:flex-row lg:gap-12">
          <div className="lg:p-0 flex justify-between md:items-center">
            <Link href="/components/Myform">
              <p className="lg:text-[24px] text-[32px] lg:p-0 p-5 md:font-black font-extrabold">
                APAAR
              </p>
            </Link>
            <div
              onClick={handleNav}
              className="block lg:hidden lg:p-0 pt-2 pr-2"
            >
              <Image src={menu} alt="menu" />
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center font-poppins lg:gap-10 ">
            <ul className="lg:flex  lg:items-center lg:gap-8 lg:p-0 p-6">
              <li className="my-6 md:my-0">
                <a
                  href="#"
                  className="leading-[28px] font-medium hover:text-[grey]"
                >
                  Home
                </a>
              </li>
              <li className="my-6 md:my-0">
                <a
                  href=""
                  className="leading-[28px] font-medium hover:text-[grey] flex gap-2"
                >
                  Product
                  <Image src={down} alt="down" />
                </a>
              </li>
              <li className="my-6 md:my-0">
                <a
                  href=""
                  className="leading-[28px] font-medium hover:text-[grey]"
                >
                  About Us
                </a>
              </li>
              <Link href="/components/Myform" className="leading-[28px] font-medium hover:text-[grey] my-6 md:my-0">
                    Contact Us
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:p-4 p-0">
          <Link href="/components/Myform">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="lg:block hidden lg:rounded-[8px] lg:bg-[#090909]  md:items-center md:justify-center md:py-3.5 md:px-8 md:text-neutral-white font-plus-jakarta-sans text-white hover:bg-gray-800 sm:hidden font-bold"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full justify-end items-center">
          <div onClick={handleNav} className=" cursor-pointer">
            <Image src={close} alt="close" />
          </div>
        </div>
        <div>
          <ul className="text-[22px] flex flex-col gap-5 md:flex md:flex-col md:gap-20 md:text-[24px]">
            <li className="my-6 md:my-0">
              <a
                href="#"
                className="leading-[28px] font-medium hover:text-[grey]"
              >
                Home
              </a>
            </li>
            <li className="my-6 md:my-0">
              <a
                href=""
                className="leading-[28px] font-medium hover:text-[grey] flex gap-2"
              >
                Product
                <Image src={down} alt="down" />
              </a>
            </li>
            <li className="my-6 md:my-0">
              <a
              href=""
                className="leading-[28px] font-medium hover:text-[grey]"
              >
                About Us
              </a>
            </li>
            <Link href="/components/Myform"  className="leading-[28px] font-medium hover:text-[grey] my-6 md:my-0">
                Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
