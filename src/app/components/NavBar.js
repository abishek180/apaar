import React from "react";

export const NavBar = () => {
  return (
    <div className="bg-white fixed top-0 w-full">
      <div className="md:flex md:justify-around md:gap-[300px] md:mt-3">
        <div className="md:flex md:flex-row md:gap-12 sm:flex sm:flex-col">
          <div className=" font-black md:text-2xl md:flex md:items-center">
            <p>APAAR</p>
          </div>
          <div className="md:flex md:items-center font-poppins md:gap-10">
            <ul className="md:flex  md:items-center md:gap-8">
              <li className="my-6 md:my-0">
                <a
                  href="#"
                  className="leading-[28px] font-medium hover:text-[grey]"
                >
                  Product
                </a>
              </li>
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
                  className="leading-[28px] font-medium hover:text-[grey]"
                >
                  Contact Us
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
            </ul>
          </div>
        </div>
        <button className="md:block md:rounded-[8px] md:bg-[#090909]  md:items-center md:justify-center md:py-3.5 md:px-8 md:text-neutral-white font-plus-jakarta-sans text-white hover:bg-gray-800 sm:hidden">
          Get Started
        </button>
      </div>
    </div>
  );
};
