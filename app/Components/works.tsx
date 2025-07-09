"use client";
import Image from "next/image";
// import { motion } from "framer-motion";
import work1 from "../asserts/works/work1.webp";
import work2 from "../asserts/works/work2.webp";
import work3 from "../asserts/works/work3.webp";
import work4 from "../asserts/works/work4.webp";
import Link from "next/link";

const works = [
  { title: "Forecoms", image: work1 },
  { title: "Tribute To Legend Concerts", image: work2 },
  { title: "Sadde Music Video", image: work3 },
  { title: "Helakuru", image: work4 },
  { title: "Spa Ceylon", image: work1 },
];

export default function SelectedWorks() {
  return (
    <div
      id="work"
      className="text-white py-12 px-6 md:px-20 pt-20 z-20 bg-[#0f0f10]"
    >
      <h2 className="text-5xl md:text-[106px] font-avenir font-bold text-center mb-12">
        Selected Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto">
        {works.map((work, index) => {
          return (
            <Link
              href="#"
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {work.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
