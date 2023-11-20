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



export default function Home() {
  return (
    <div className=" text-black font-plus-jakarta-sans max-w-screen-3xl backgroundImage">
      <NavBar />
      <Hero />
      <Image/>
      <Client />
      <Features />
      <USP />
      <Testimony />
      <CTA />
      <Business />
      <Footer />
    </div>
  );
}
