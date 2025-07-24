"use client";

import Footer from "./Footer";

export default function Contact() {
  const handleClick = () => {
    window.location.href = "tel:0714320017";
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,_transparent_10%,_rgba(230,1,7)_30%,_transparent_100%)]">
      <main id="connect" className="font-avenir text-white min-h-screen flex flex-col items-center justify-center px-4 text-center  overflow-hidden  inset-0 -z-20 ">
        {/* Background Image */}
        <div className="absolute inset-0 -z-30 w-full h-full">
        
        </div>

        {/* Main Contact Text */}
        <div className="px-4">
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto px-2">
            Say Hello, Let’s Talk Events — Plan Something Big{" "}
            <em className="font-light">Make Some Magic Happen</em>
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <div className="p-4 backdrop-blur-3xl bg-white/10 rounded-xl   inline-block hover:scale-105 transition-transform">
            <button
              onClick={handleClick}
              className="bg-gray-50 text-red-800 font-bold  text-xl sm:text-2xl md:text-3xl px-6 sm:px-11 py-5 sm:py-6 md:py-8 rounded-lg "
            >
              Call Us For A Quote
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}