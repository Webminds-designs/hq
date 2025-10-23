"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Component() {
  // First row logos (moves right)
  const firstRow = [
    { src: "/AsianPaints.png", alt: "Asian Paints" },
    { src: "/Sirasa tv.png", alt: "Sirasa TV" },
    { src: "/Helakuru.png", alt: "Helakuru" },
    { src: "/AMW.png", alt: "AMW" },
    { src: "/daraz.png", alt: "Daraz" },
    { src: "/Toptul.png", alt: "TOPTUL" },

  ];

  // Second row logos (moves left)
  const secondRow = [
    { src: "/Toptul.png", alt: "TOPTUL" },
    { src: "/Supreme_tv.png", alt: "Supreme TV" },
    { src: "/Pepper ST.png", alt: "Pepper ST" },
    { src: "/Foreconns-Canneries.png", alt: "Foreconns Canneries" },
    { src: "/Helakuru.png", alt: "Helakuru" },

  ];

  return (
    <div className="w-full bg-transparent py-16 overflow-hidden">
      <div className="relative">
        {/* First Row - Moving Right */}
        <div className="flex mb-40">
          <motion.div
            className="flex gap-12 min-w-max"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* First set of logos */}
            <div className="flex gap-12">
              {firstRow.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="w-64 h-32 relative flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-12">
              {firstRow.map((logo, index) => (
                <div
                  key={`first-dup-${index}`}
                  className="w-64 h-32 relative flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="flex">
          <motion.div
            className="flex gap-16 min-w-max"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* First set of logos */}
            <div className="flex gap-16">
              {secondRow.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="w-64 h-32 relative flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-16">
              {secondRow.map((logo, index) => (
                <div
                  key={`second-dup-${index}`}
                  className="w-64 h-32 relative flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
