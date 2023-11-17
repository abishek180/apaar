import React, { useState } from "react";
import Image from "next/image";
import down from "../Images/down.svg";
import menu from "../Images/menu.svg";
import close from "../Images/close.svg";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-white fixed top-0 w-full z-10">
      <div className="md:flex md:justify-around md:gap-[180px] md:mt-3">
        <div className="md:flex md:flex-row md:gap-12">
          <div className="md:p-0  flex justify-between md:items-center">
            <p className="md:text-[24px] text-[32px] md:p-0 p-3 md:font-black font-extrabold">
              APAAR
            </p>
            <div
              onClick={handleNav}
              className=" block md:hidden md:p-0 pt-1 pr-2"
            >
              <Image src={menu} alt="menu" />
            </div>
          </div>
          <div className="hidden md:flex md:items-center font-poppins md:gap-10 ">
            <ul className="md:flex  md:items-center md:gap-8 md:p-0 p-6">
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
                  href="#"
                  className="leading-[28px] font-medium hover:text-[grey] flex gap-2"
                >
                  Product
                  <Image src={down} alt="down" />
                </a>
              </li>
              <li className="my-6 md:my-0">
                <a
                  href="#"
                  className="leading-[28px] font-medium hover:text-[grey]"
                >
                  About Us
                </a>
              </li>
              <li className="my-6 md:my-0">
                <a
                  href="#"
                  className="leading-[28px] font-medium hover:text-[grey]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:p-4 p-0">
          <button className="md:block hidden md:rounded-[8px] md:bg-[#090909]  md:items-center md:justify-center md:py-3.5 md:px-8 md:text-neutral-white font-plus-jakarta-sans text-white hover:bg-gray-800 sm:hidden font-bold">
            Get Started
          </button>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full justify-end items-center">
          <div onClick={handleNav} className=" cursor-pointer">
            <Image src={close} alt="close" />
          </div>
        </div>

        <div>
          <ul>
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
                href="#"
                className="leading-[28px] font-medium hover:text-[grey] flex gap-2"
              >
                Product
                <Image src={down} alt="down" />
              </a>
            </li>
            <li className="my-6 md:my-0">
              <a
                href="#"
                className="leading-[28px] font-medium hover:text-[grey]"
              >
                About Us
              </a>
            </li>
            <li className="my-6 md:my-0">
              <a
                href="#"
                className="leading-[28px] font-medium hover:text-[grey]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
