"use client";
import Image from "next/image";
import bgHero from "./Images/background.svg";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Client } from "./components/Client";
import { Features } from "./components/Features";
import { USP } from "./components/USP";
import { Testimony } from "./components/Testimony";
import { CTA } from "./components/CTA";
import { Business } from "./components/Business";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
   
    <div className=" text-black font-plus-jakarta-sans max-w-screen-3xl backgroundImage">
      <Image src={bgHero} className="absolute w-full top-0 left-0 z-[-1]" />
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
    </div>
    
  );
}
