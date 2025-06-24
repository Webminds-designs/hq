"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { StaticImageData } from "next/image";

// Import images
import img1 from "../asserts/gallery/gallery1.webp";
import img2 from  "../asserts/gallery/gallery2.webp";
import img3 from "../asserts/gallery/gallery3.webp";
import img4 from "../asserts/gallery/gallery4.webp";
import img5 from "../asserts/gallery/gallery5.webp";
import img6 from "../asserts/gallery/gallery6.webp";
import img7 from "../asserts/gallery/gallery7.webp";
import img8 from "../asserts/gallery/gallery8.webp";
import img9 from "../asserts/gallery/gallery9.webp";
import img10 from "../asserts/gallery/gallery10.webp";
import img11 from "../asserts/gallery/gallery11.webp";
import img12 from "../asserts/gallery/gallery12.webp";
import img13 from "../asserts/gallery/gallery13.webp";
import img14 from "../asserts/gallery/gallery14.webp";
import img15 from "../asserts/gallery/gallery15.webp";
// import blurimg from "../asserts/blurLayer.webp";
// import WaveCanvas from "./WaveCanvas";
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
  img13,
  img14,
  img15,
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
        className="relative z-0 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-4 sm:px-6 py-10 sm:py-14 md:py-16"
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {col.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className={`relative w-full h-40 sm:h-64 md:h-70 rounded-xl overflow-hidden shadow-lg ${
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

      <div className="absolute -bottom-42 inset-0 z-30  flex justify-center">
  <div>
    <WaveCanvas2 />
  </div>
</div>

    </div>
  );
};

export default Gallery;
