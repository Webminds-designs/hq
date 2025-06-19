"use client";
import React from "react";
import WaveCanvas from "./WaveCanvas";

const Hero = () => {
  return (
    <div className=" ">
    <div className="relative w-full h-screen overflow-hidden ">
     

      {/* --- Middle Layer: Hero Image Overlay --- */}
      <div
        className="absolute inset-0 bg-cover bg-center  z-0"
        style={{ backgroundImage: 'url("/hero.webp")' }}
      ></div>

   
    </div>
     {/* --- Bottom Layer: Wave Background --- */}
      <div className="absolute inset-0 top-[45%] z-10">
        <WaveCanvas />
      </div>
       {/* --- Top Layer: Text Content --- */}
      <div className="relative z-20 -top-42 h-full flex flex-col justify-end pb-10 px-8 text-white">
        <h1 className="text-4xl md:text-8xl font-avengenz">HQ ENTERTAINMENT</h1>
        <p className="font-avenir font-light md:text-[25px] mt-4">
          Igniting <em className="italic">Unforgettable</em> moments Through Entertainment
        </p>
        <div className="text-xl mt-6 flex justify-between w-full max-w-2xl text-white/80">
          <span>©2025</span>
          <span>BASED IN SL</span>
          <span>EXPERIENCE CURATORS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
