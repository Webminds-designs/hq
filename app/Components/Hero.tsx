"use client";
import React from "react";
import WaveCanvas from "./WaveCanvas";

const Hero = () => {
  return (
    <div className="z-90">
      <div className="relative w-full h-screen overflow-hidden ">
        {/* --- Middle Layer: Hero Image Overlay --- */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/hero.jpg")',

            backgroundSize: "cover",
            backgroundPosition: "top",
            filter: "brightness(0.5)", // Darken the image for better text visibility
          }}
        ></div>
      </div>

      {/* --- Bottom Layer: Wave Background --- */}
      <div className="absolute inset-0 top-[45%] z-10">
        <WaveCanvas />
      </div>

      {/* --- Top Layer: Text Content --- */}
      <div className="relative z-20 -top-62 h-full flex flex-col justify-end pb-5 px-4 sm:px-6 md:px-10 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-8xl font-avengenz leading-tight">
          HQ ENTERTAINMENT
        </h1>

        <p className="font-avenir font-light text-sm sm:text-base md:text-[25px] mt-2 sm:mt-3 md:mt-4">
          Igniting <em className="font-oldStandardTT italic">Unforgettable</em>{" "}
          moments Through Entertainment
        </p>
        <div className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 flex flex-col sm:flex-row sm:justify-between gap-y-1 sm:gap-y-0 w-full md:max-w-2xl text-white/80">
          <span>©2025</span>
          <span>BASED IN SL</span>
          <span>EXPERIENCE CURATORS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
