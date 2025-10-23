"use client";

import Image from "next/image";
// // import { motion } from "framer-motion"; // Commented out as it's not used in the provided code
// import work1 from "../asserts/works/work1.webp";
// import work2 from "../asserts/works/work2.webp";
// import work3 from "../asserts/works/work3.webp";
// import work4 from "../asserts/works/work4.webp";
// import work5 from "/spa/spa3.webp";
import Link from "next/link";

// import type { StaticImageData } from "next/image";

// Define the structure for a work item
type WorkItem = {
  title: string;
  image: string;
  link: string;
};

// Array of work items
const works: WorkItem[] = [
  { title: "Forecoms", image: "/forecoms/fore1.webp", link: "/works/forecoms.html" },
  {title: "Tribute To Legend Concerts", image: "/tribute/tr1.webp", link: "/works/tribute.html",},
  { title: "Sadde Music Video", image: "/sadee/sa1.webp", link: "/works/sadde.html" },
  { title: "Helakuru", image: "/helakuru/he1.webp", link: "/works/helakuru.html" },
  { title: "Spa Ceylon", image: "/spa/sap2.webp", link: "/works/spa.html" },
];


export default function SelectedWorks() {
  return (
    <div
      id="work"
      className="text-white py-12 px-6 md:px-20 pt-20 z-20 bg-[#0f0f10]"
    >
      {/* Section Title */}
      <h2 className="text-5xl md:text-[106px] font-avenir font-bold text-center mb-12">
        Selected Works
      </h2>

      {/* Grid Container for Works */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto">
        {works.map((work, index) => {
          // Determine if this is the last work item and if it needs to be centered
          const isLastWork = index === works.length - 1;
          const isOddNumberOfWorks = works.length % 2 !== 0;

          return (
            // Link wrapper for each work item, with hover effects
          <Link
            href={work.link}
            key={index}
            className={`group relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-105 ${
              isLastWork && isOddNumberOfWorks ? "md:col-span-2" : ""
            }`}
          >
              <div className="relative w-full h-64 md:h-96">
                {/* Image component with grayscale filter and hover effect */}
                <Image
                  src={work.image}
                  alt={work.title}
                  fill // Fills the parent div
                  sizes="(max-width: 768px) 100vw, 50vw" // Responsive image sizing for Next.js Image
                  className="object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 group-hover:brightness-125 group-hover:saturate-150" // Added brightness and saturate on hover
                />
                {/* Overlay for darkening effect on hover */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
                {/* Title overlay at the bottom */}
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
