"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import work1 from "../asserts/works/work1.webp";
import work2 from "../asserts/works/work2.webp";
import work3 from "../asserts/works/work3.webp";
import work4 from "../asserts/works/work4.webp";

const works = [
  { title: "Forecoms", image: work1 },
  { title: "Tribute To Legend Concerts", image: work2 },
  { title: "Sadde Music Video", image: work3 },
  { title: "Helakuru", image: work4 },
  { title: "Spa Ceylon", image: work1 },
];

export default function SelectedWorks() {
  return (
    <div className=" text-white py-12 px-6 md:px-20 pt-20 z-20 bg-[#0f0f10]">
      <h2 className="text-8xl font-avenir font-bold  text-center mb-12">Selected Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {works.map((work, index) => {
          const isLastItem = index === works.length - 1;
          const isOdd = works.length % 2 !== 0;
          const shouldCenter = isLastItem && isOdd;

          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                shouldCenter ? "col-span-2 justify-self-center" : ""
              }`}
            >
              <Image
                src={work.image}
                alt={work.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-opacity-50 px-3 py-1 rounded">
                {work.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
