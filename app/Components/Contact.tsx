"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import bgimg from "../asserts/Rectangle 2030.webp";
import Footer from "./Footer";

export default function Contact() {
  const handleClick = () => {
    alert("Quote request sent!");
  };

  return (
    <>
      <main className="font-avenir text-white min-h-screen flex flex-col items-center justify-center px-4 text-center  overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-30 w-full h-full">
          <Image
            src={bgimg}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Main Contact Text */}
        <div className="px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto px-2">
            Say Hello, Let’s Talk Events — Plan Something Big{" "}
            <em className="font-light">Make Some Magic Happen</em>
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <div className="p-3 backdrop-blur-lg rounded-xl inline-block">
            <button
              onClick={handleClick}
              className="bg-white text-red-800 font-bold shadow-xl text-xl sm:text-2xl md:text-3xl px-6 sm:px-8 py-5 sm:py-6 md:py-8 rounded-lg hover:scale-105 transition-transform"
            >
              Call Us For A Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
