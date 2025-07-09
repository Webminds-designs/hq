"use client";
import Contact from "@/app/Components/Contact";
import Navbar from "@/app/Components/Navbar";
import { useParams } from "next/navigation";
import React from "react";
import works from "./data"; // Adjust the import path as necessary
import Image from "next/image";

type Work = {
  id: string;
  title: string;
  images: string[];
  Subtitle: string;
  secondaryTitle?: string;
  year?: string;
};

function Page() {
  const params = useParams();
  const id = params.id as string;

  console.log("Selected Work ID:", id);

  const work = works.find((work: Work) => work.id === id);

  // Handle case where work is not found
  if (!work) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center mt-20 p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Work Not Found
          </h1>
          <p className="text-gray-600 mt-4 text-center text-base sm:text-lg">
            The requested work could not be found. Please check the URL.
          </p>
        </div>
        <div className="relative z-0 mt-auto">
          <Contact />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-16 sm:mt-18 md:mt-20 px-2 sm:px-4 lg:px-8">
        {/* Title and Subtitle Section */}
        <div className="flex flex-col items-center justify-center text-center gap-1 sm:gap-2 max-w-4xl mx-auto">
          <div className="w-fit">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-avenir font-extrabold w-fit leading-tight">
              {work.title}
            </h1>

            {work.secondaryTitle ? (
              <div className="flex flex-row justify-center sm:justify-between w-full font-oldStandardTT mt-2 gap-4 sm:mt-4">
                <p className="text-base sm:text-lg font-medium mb-1 sm:mb-0 sm:mr-4">
                  {work.secondaryTitle}
                </p>
                <p className="text-base sm:text-lg font-medium">{work.year}</p>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-full font-oldStandardTT mt-2 sm:mt-4">
                <p className="text-base sm:text-lg font-medium">{work.year}</p>
              </div>
            )}
          </div>
          <p className="mt-4 font-avenir text-lg sm:text-xl md:text-2xl font-medium max-w-3xl">
            {work.Subtitle}
          </p>
        </div>

        {/* Image Grid - OPTION 1: Fixed dimensions with container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto mt-8">
          {work.images.map((image, index) => (
            <div
              key={index}
              className="w-full h-80 sm:h-96 md:h-[400px]flex justify-center items-center overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`${work.title} ${index + 1}`}
                className="w-full h-full object-cover"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* OPTION 2: Alternative - Fixed aspect ratio with fill */}
        {/* Uncomment this and comment the above if you prefer this approach */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto mt-8">
          {work.images.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`${work.title} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        */}

        {/* OPTION 3: Alternative - Exact fixed pixel dimensions */}
        {/* Uncomment this and comment the above if you prefer this approach */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto mt-8">
          {work.images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={image}
                alt={`${work.title} ${index + 1}`}
                className="rounded-lg object-cover"
                width={500}
                height={400}
                style={{ width: '500px', height: '400px' }}
              />
            </div>
          ))}
        </div>
        */}
      </div>

      {/* Big Logo - Fixed dimensions */}
      <div className="mt-10 mb-10 flex justify-center px-4 sm:px-8 lg:px-14">
        <div className="relative w-full max-w-5xl h-64 sm:h-80 md:h-96">
          <Image
            src="/biglogo.png"
            alt="logo"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Page;
