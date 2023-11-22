"use client";
import React from "react";;
import google22 from "../Images/google.png";
import dashboard from "../Images/apaar-app-screen.png";
// import bgHero from "../Images/background.svg";
import Image from "next/image";
import rightline from "../Images/right-outline.svg";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { motion } from "framer-motion";
import Link from "next/link";


export const Hero = () => {

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center md:mt-28 mt-24 md:gap-10 gap-5">
        
        <div className="md:w-[1074px] w-[364px]">
          <h1 className="md:text-[58px] text-[32px] font-extrabold text-left md:text-center">
            All-in-One Platform for Academic Automation and Resolution.
          </h1>
        </div>
        <div className="md:text-[20px] text-[16px] leading-normal font-medium text-darkslategray-300 w-[386px] md:w-[901px] p-3">
          <p className="text-left md:text-center">
            Seamlessly managing academic tasks, student records, and
            communication channels, APAAR empowers schools to focus on what
            truly matters - education.
          </p>
        </div>
        <div>
          <Link href="/components/Myform">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex rounded-lg bg-[#2C2C2C] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.13)]  items-center justify-center p-4  md:py-4 md:px-6 gap-2 text-white md:text-[24px] text-[16px] hover:bg-black font-bold"
            >
              Get started. It’s for
              <span className="md:text-[26px] text-[16px] text-orange-300 font-bold">
                FREE
              </span>
              <div className="rounded-[50px] bg-white md:w-[27px] md:h-[27px] sm:w-[16.596px] sm:h-[16.596px] text-center justify-center flex">
                <Image src={rightline} alt="right" />
                
              </div>
            </motion.button>
          </Link>
        </div>
        <div>
          <Image src={google22} alt="google" />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-[346px] h-[236.13px] md:w-[791.282px] md:h-[540.016px] "
        >
          <Image src={dashboard} alt="dashboard" />
        </motion.div>
      </div>
    </div>
  );
};
