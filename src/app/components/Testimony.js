import React, { useRef, useState } from "react";
import Image from "next/image";
import user from "../Images/User.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";

export const Testimony = () => (
  <div className="max-w-screen-2xl flex flex-col justify-center items-center text-center lg:mt-40 mt-20 mx-auto gap-10">
    <div className=" lg:text-[52px] font-extrabold text-[32px] ">
      What they Say?
    </div>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{

        360:{
          slidesPerView:1,
          spaceBetween:20,
        }, 

        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024:{
          slidesPerView:3,
          spaceBetween:40,
        },

        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        1536:{
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
     
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="mt-4 p-4">
        {" "}
        <div className=" rounded-2xl bg-[#F5F6F7] h-[364.62px] p-6">
          <div className="flex gap-3">
            <Image src={user} alt="user" />
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
              “Embracing educations digital shift is crucial, and Apaar is the
              ideal solution. Administrative staff to teaches and parents,Apaar
              supports all seamlessly..”
            </p>
          </div>
          <div>
          <RiDoubleQuotesL className="mt-12 text-[80px] text-[#DEE4EA]"/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4 p-4">
        {" "}
        <div className="rounded-2xl bg-secondary-50 h-[364.62px] bg-[#FFF9EE] p-6">
          <div className="flex gap-3">
            <Image src={user} alt="user" />
            <div className="flex flex-col items-start justify-start gap-[3.65px] ">
              <div className=" leading-normal font-medium text-[14.585px] ">Annette Black</div>
              <div className="  leading-normal  text-[12.762px] flex">
                <span className="text-[#42526B] ">Principal,</span>
                <p className="text-[#EA9B7A] font-bold ">NIMS Uae</p>
              </div>
            </div>
          </div>
          <div className=" leading-normal text-left mt-4 text-[#061C3D] md:text-[16.408px] sm:text-[16px]">
            <p>
              “Thanks to Apaar school management what used to take me 7-8 hours
              of work, I can now do it in 35 minutes. Its not only cost
              effective, good for students, but its a boon for management and
              makes parents very comfortable”
            </p>
          </div>
          <RiDoubleQuotesL className="text-[80px] text-[#FFF0D4]"/>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4 p-4">
        <div className="rounded-2xl bg-success-50 h-[364.62px]  bg-[#E7F5E8] p-6">
          <div className="flex gap-3">
            <Image src={user} alt="user" />
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
              Were excited to continue maximizing Apaar potential.”
            </p>
          </div>
          <RiDoubleQuotesL className="text-[80px] text-[#BAE7BE]"/>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4 p-4">
        <div className=" rounded-2xl bg-[#F5F6F7] h-[364.62px] p-6">
          <div className="flex gap-3">
            <Image src={user} alt="user" />
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
              “Embracing educations digital shift is crucial, and Apaar is the
              ideal solution. Administrative staff to teaches and parents,Apaar
              supports all seamlessly..”
            </p>
          </div>
          <RiDoubleQuotesL className="mt-12 text-[80px] text-[#D3CCE2]"/>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-4 p-4">
        <div className=" rounded-2xl bg-[#F5F6F7]  h-[364.62px] p-6">
          <div className="flex gap-3">
            <Image src={user} alt="user" />
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
              “Embracing educations digital shift is crucial, and Apaar is the
              ideal solution. Administrative staff to teaches and parents,Apaar
              supports all seamlessly..”
            </p>
          </div>
          <RiDoubleQuotesL className="mt-12 text-[80px] text-[#D3CCE2]"/>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);
