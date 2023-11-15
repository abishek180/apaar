"use client";
import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Client } from "./components/Client";
import { Features } from "./components/Features";
import { USP } from "./components/USP";
import { Testimony } from "./components/Testimony";
import { CTA } from "./components/CTA";
import { Business } from "./components/Business";
import { Footer } from "./components/Footer";
import { NavBar2 } from "./components/NavBar2";

export default function Home() {
  return (
    <div className=" text-black font-plus-jakarta-sans max-w-screen-xl  ">
      <NavBar />
      <Hero />
      <Image />
      <Client />
      <Features />
      <USP />
      <Testimony />
      <CTA />
      <Business />
      <Footer />
      {/* <NavBar2/> */}
    </div>
  );
}
