"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Image from "next/image";

const page = () => {
  const projectImages = [
    "/hero.jpg",
    "/image (1).jpg",
    "/AsianPaints.png",
    "/Helakuru.png",
    "/Foreconns-Canneries.png",
    "/file.svg",
  ];

  return (
    <div>
      <Navbar />
      <div className="relative ">
        {/* 4 Vertical divider lines creating 5 equal sections */}
        <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
        <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
        <div className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>
        <div className="hidden lg:block absolute left-[80%] top-0 bottom-0 w-px bg-gray-700 opacity-40"></div>

        <div className="relative flex flex-col items-center justify-center h-fit w-screen py-20 z-10">
            <div className="text-[100px] font-bold font-avenir">
          Sadde Music Video
        </div>
        <div className="flex justify-between w-1/2 px-10 font-oldStandardTT">
          <div>Lahiru perera</div>
          <div>2024</div>
        </div>
        <div className="text-[40px] font-avenir">
          LED Screen Production & Management by HQ Entertainment
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full max-w-4xl h-[50em] mt-8">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-8">
          <Image
            src="/hqsound.png"
            alt="HQ Sound Logo"
            width={1600}
            height={600}
            className="object-contain"
          />
        </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
