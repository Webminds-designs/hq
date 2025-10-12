import Image from "next/image";
import Link from "next/link";

export default function VideoProduction() {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 font-avenir">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-oldStandardTT italic text-gray-200 mb-2">
          Video <span className="not-italic font-bold text-white">Production</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Capture and create unforgettable moments
        </p>
      </div>

      {/* Main Hero Image */}
      <div className="mb-10 h-128 overflow-hidden rounded-lg">
        <Image
          src="/video-main.jpg"
          alt="Video Production"
          width={1200}
          height={400}
          className="w-full h-full object-cover object-[center_55%]"
        />
      </div>

      {/* Features list under image */}
      <div className="flex flex-wrap justify-center text-center text-gray-300 text-sm md:text-base max-w-4xl mx-auto mb-14">
        <div className="w-1/2 md:w-1/4 p-4">
          Professional videography <br /> with multi-camera angles
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Drone coverage <br /> for aerial shots
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Real-time event coverage <br /> & live streaming
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Highlight reels <br /> & full-length edits
        </div>
      </div>

      {/* Gallery - 3 tilted images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-20">
        <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/video1.jpg"
            alt="Video setup 1"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/video2.jpg"
            alt="Video setup 2"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/video3.jpg"
            alt="Video setup 3"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* What sets us apart */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-lg md:text-xl mb-4 italic">
          What sets <span className="font-normal not-italic">us</span> apart
        </h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          We produce cinematic-quality videos using high-end gear, 
          and we treat every client like family throughout the process.
        </p>
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="text-blue-400 hover:underline text-sm md:text-base">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
