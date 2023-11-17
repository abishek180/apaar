import React, { useRef, useState } from "react";
import Image from "next/image";
import user from "../Images/User.png";
import leftarrow from "../Images/ArrowLeft.svg";
import rightarrow from "../Images/ArrowRight.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export const Testimony = () => (
  <div className="flex flex-col justify-center items-center text-center md:mt-40 mt-20 gap-10">
    <div className=" md:text-[52px] font-extrabold text-[32px]">
      What they Say’s ?
    </div>
    {/* <div className=" flex mt-32 gap-9">
      <div className=" rounded-2xl bg-tertiary-50 w-[386.5px] h-[364.62px] opacity-[0.5]">
        <div className="flex flex-row items-center justify-start gap-[10.94px]">
          <div className="flex flex-col items-start justify-start gap-[3.65px]">
            <div className=" leading-[21.88px] font-medium">Annette Black</div>
            <div className="text-[12.76px] leading-[18.23px] text-darkslategray-200">
              <span>{`CEO of `}</span>
              <span className="font-medium text-blueviolet">Amazon</span>
            </div>
          </div>
        </div>
        <div className=" leading-[21.88px] inline-block w-[313.57px]">
          “Less than 24h turn around. Easy communication. Did exactly as
          offered, all around a perfect experience.”
        </div>
      </div>
      <div className="rounded-2xl bg-secondary-50 w-[386.5px] h-[364.62px] text-[16.41px] bg-[#FFF9EE] p-6">
        <div className="flex gap-3">
          <Image src={user} />
          <div className="flex flex-col items-start justify-start gap-[3.65px] ">
            <div className=" leading-normal font-medium">Annette Black</div>
            <div className="  leading-normal  text-[12.762px] flex">
              <span className="text-[#42526B] ">Principal,</span>
              <p className="text-[#EA9B7A] font-bold ">NIMS Uae</p>
            </div>
          </div>
        </div>
        <div className=" leading-normal text-left mt-4 text-[#061C3D] text-[16.408px]">
          <p>
            “Thanks to Apaar school management what used to take me 7-8 hours of
            work, I can now do it in 35 minutes. It's not only cost effective,
            good for students, but it's a boon for management and makes parents
            very comfortable”
          </p>
        </div>
      </div>
      <div className="rounded-2xl bg-success-50 w-[386.5px] h-[364.62px] text-[16.41px] bg-[#E7F5E8] p-6">
        <div className="flex gap-3">
          <Image src={user} />
          <div className="flex flex-col items-start justify-start gap-[3.65px]">
            <div className=" leading-[21.88px] font-medium">Annette Black</div>
            <div className="text-[12.762px]  font-plus-jakarta-sans">
              <span className="font-medium text-[#42526B]">Teacher,</span>
              <span className="font-bold text-[#37AF67] ">NIMS Uae</span>
            </div>
          </div>
        </div>
        <div className=" leading-normal text-left mt-4 text-[#061C3D] text-[16.408px]">
          <p>
            “Apaar School Management has been a revelation for our school.
            Instead of juggling multiple software, it seamlessly integrates all
            aspects, making life easier for our admin staff and teachers. We're
            excited to continue maximizing Apaar potential.”
          </p>
        </div>
      </div>
      <div className=" rounded-2xl bg-[#F5F6F7] w-[386.5px] h-[364.62px] p-6">
        <div className="flex gap-3">
          <Image src={user} />
          <div className="flex flex-col items-start justify-start gap-[3.65px]">
            <div className=" leading-[21.88px] font-medium">Annette Black</div>
            <div className=" text-[12.762px] leading-normal ">
              <span className="font-medium text-[#42526B]">CEO,</span>
              <span className="text-[#7EB6EF] font-bold">NIMS Uae</span>
            </div>
          </div>
        </div>
        <div className=" leading-normal text-left mt-4 text-[#061C3D] text-[16.408px]">
          <p>
            “Embracing education's digital shift is crucial, and Apaar is the
            ideal solution. Administrative staff to teaches and parents,Apaar
            supports all seamlessly..”
          </p>
        </div>
      </div>
      <div className=" rounded-2xl bg-primary-50 w-[386.5px] h-[364.62px] opacity-[0.5]">
        <div className="flex flex-col items-start justify-start gap-[3.65px]">
          <div className=" leading-[21.88px] font-medium">Annette Black</div>
          <div className="text-[12.76px] leading-[18.23px] text-darkslategray-200">
            <span>CEO of </span>
            <span className="font-medium">Notion</span>
          </div>
        </div>
        <div className=" leading-normal text-left text-[#061C3D] text-[16.408px]">
          “Less than 24h turn around. Easy communication. Did exactly as
          offered, all around a perfect experience.”
        </div>
      </div>
    </div> */}
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="mt-4">
        {" "}
        <div className=" rounded-2xl bg-[#F5F6F7] w-[386.5px] h-[364.62px] p-6">
          <div className="flex gap-3">
            <Image src={user} />
            <div className="flex flex-col items-start justify-start gap-[3.65px]">
              <div className="text-[14.585px] leading-[21.88px] font-medium">
                Annette Black
              </div>
              <div className=" text-[12.762px] leading-normal ">
                <span className="font-medium text-[#42526B]">CEO,</span>
                <span className="text-[#7EB6EF] font-bold">NIMS Uae</span>
              </div>
            </div>
          </div>
          <div className=" leading-normal text-left mt-4 text-[#061C3D] md:text-[16.408px] sm:text-[16px]">
            <p>
              “Embracing education's digital shift is crucial, and Apaar is the
              ideal solution. Administrative staff to teaches and parents,Apaar
              supports all seamlessly..”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4">
        {" "}
        <div className="rounded-2xl bg-secondary-50 w-[386.5px] h-[364.62px]  bg-[#FFF9EE] p-6">
          <div className="flex gap-3">
            <Image src={user} />
            <div className="flex flex-col items-start justify-start gap-[3.65px] ">
              <div className=" leading-normal font-medium">Annette Black</div>
              <div className="  leading-normal  text-[12.762px] flex">
                <span className="text-[#42526B] ">Principal,</span>
                <p className="text-[#EA9B7A] font-bold ">NIMS Uae</p>
              </div>
            </div>
          </div>
          <div className=" leading-normal text-left mt-4 text-[#061C3D] md:text-[16.408px] sm:text-[16px]">
            <p>
              “Thanks to Apaar school management what used to take me 7-8 hours
              of work, I can now do it in 35 minutes. It's not only cost
              effective, good for students, but it's a boon for management and
              makes parents very comfortable”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4">
        <div className="rounded-2xl bg-success-50 w-[386.5px] h-[364.62px]  bg-[#E7F5E8] p-6">
          <div className="flex gap-3">
            <Image src={user} />
            <div className="flex flex-col items-start justify-start gap-[3.65px]">
              <div className="text-[14.585px] leading-[21.88px] font-medium">
                Annette Black
              </div>
              <div className="text-[12.762px]  font-plus-jakarta-sans">
                <span className="font-medium text-[#42526B]">Teacher,</span>
                <span className="font-bold text-[#37AF67] ">NIMS Uae</span>
              </div>
            </div>
          </div>
          <div className=" leading-normal text-left mt-4 text-[#061C3D] md:text-[16.408px] sm:text-[16px]">
            <p>
              “Apaar School Management has been a revelation for our school.
              Instead of juggling multiple software, it seamlessly integrates
              all aspects, making life easier for our admin staff and teachers.
              We're excited to continue maximizing Apaar potential.”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4">
        <div className=" rounded-2xl bg-[#F5F6F7] w-[386.5px] h-[364.62px] p-6">
          <div className="flex gap-3">
            <Image src={user} />
            <div className="flex flex-col items-start justify-start gap-[3.65px]">
              <div className="text-[14.585px] leading-[21.88px] font-medium">
                Annette Black
              </div>
              <div className=" text-[12.762px] leading-normal ">
                <span className="font-medium text-[#42526B]">CEO,</span>
                <span className="text-[#7EB6EF] font-bold">NIMS Uae</span>
              </div>
            </div>
          </div>
          <div className=" leading-normal text-left mt-4 text-[#061C3D] md:text-[16.408px] sm:text-[16px]">
            <p>
              “Embracing education's digital shift is crucial, and Apaar is the
              ideal solution. Administrative staff to teaches and parents,Apaar
              supports all seamlessly..”
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4">
        <div className=" rounded-2xl bg-[#F5F6F7] w-[386.5px] h-[364.62px] p-6">
          <div className="flex gap-3">
            <Image src={user} />
            <div className="flex flex-col items-start justify-start gap-[3.65px]">
              <div className="text-[14.585px] leading-[21.88px] font-medium">
                Annette Black
              </div>
              <div className=" text-[12.762px] leading-normal ">
                <span className="font-medium text-[#42526B]">CEO,</span>
                <span className="text-[#7EB6EF] font-bold">NIMS Uae</span>
              </div>
            </div>
          </div>
          <div className=" leading-normal text-left mt-4 text-[#061C3D] md:text-[16.408px] sm:text-[16px]">
            <p>
              “Embracing education's digital shift is crucial, and Apaar is the
              ideal solution. Administrative staff to teaches and parents,Apaar
              supports all seamlessly..”
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="flex gap-10 mt-5">
      <button className="bg-[#F8F8F8] rounded-[150px] md:p-4 p-[11.667px] flex justify-center items-center">
        <Image
          src={leftarrow}
          className="md:w-[37px] md:h-[37px] w-[23.333px] h-[23.333px]"
        />
      </button>
      <button className="bg-[#2C2C2C] rounded-[150px] md:p-4 p-[11.667px] flex justify-center items-center">
        <Image src={rightarrow} />
      </button>
    </div>
  </div>
);
