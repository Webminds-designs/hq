"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12
];

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    gsap.fromTo(
      gallery,
      {
        scale: 1.25,
        y: 0,
      },
      {
        scale: 0.95,
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: gallery,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={galleryRef}
      className="relative grid grid-cols-2 md:grid-cols-3 gap-4 p-6 top-30  overflow-hidden"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={img}
            alt={`gallery-${index}`}
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
