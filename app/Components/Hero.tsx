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
      <div className="absolute inset-0 top-20 z-10">
        <WaveCanvas />
      </div>
       {/* --- Top Layer: Text Content --- */}
      <div className="relative z-20 -top-36 h-full flex flex-col justify-end pb-10 px-8 text-white">
        <h1 className="text-4xl md:text-7xl font-avengenz">HQ ENTERTAINMENT</h1>
        <p className="font-avenir font-light md:text-xl mt-4">
          Igniting <em className="italic">Unforgettable</em> moments Through Entertainment
        </p>
        <div className="text-xs mt-6 flex justify-between w-full max-w-lg text-white/80">
          <span>©2025</span>
          <span>BASED IN SL</span>
          <span>EXPERIENCE CURATORS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
