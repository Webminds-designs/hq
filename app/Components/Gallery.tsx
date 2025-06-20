"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { StaticImageData } from "next/image";

// Import images
import img1 from "../asserts/works/work1.webp";
import img2 from "../asserts/works/work2.webp";
import img3 from "../asserts/works/work3.webp";
import img4 from "../asserts/works/work4.webp";
import img5 from "../asserts/works/work1.webp";
import img6 from "../asserts/works/work2.webp";
import img7 from "../asserts/works/work3.webp";
import img8 from "../asserts/works/work4.webp";
import img9 from "../asserts/works/work1.webp";
import img10 from "../asserts/works/work2.webp";
import img11 from "../asserts/works/work3.webp";
import img12 from "../asserts/works/work4.webp";
import blurimg from "../asserts/blurLayer.webp";
import WaveCanvas from "./WaveCanvas";
import WaveCanvas2 from "./WaveCanvas2";

gsap.registerPlugin(ScrollTrigger);

const images: StaticImageData[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    // General zoom & lift animation on the whole gallery
    gsap.fromTo(
      gallery,
      { scale: 1.2, y: 0 },
      {
        scale: 1,
        y: -80,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gallery,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Parallax effect for center column images
    const centerImgs = gallery.querySelectorAll(".parallax-img");
    centerImgs.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 40 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  // Distribute images into 3 columns
  const columns = [[], [], []] as StaticImageData[][];
  images.forEach((img, index) => {
    columns[index % 3].push(img);
  });

  return (
    <div>
      <div
        ref={galleryRef}
        className="relative z-0 grid grid-cols-2 md:grid-cols-3 gap-6 px-6 py-16"
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {col.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className={`relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg ${
                  colIndex === 1 ? "parallax-img" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`gallery-${colIndex}-${imgIndex}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute -bottom-32 inset-0 z-30 w-full ">
        <WaveCanvas2 />
      </div>
    </div>
  );
};

export default Gallery;
