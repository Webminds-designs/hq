import Image from "next/image";
import Link from "next/link";

export default function FullEventProduction() {
  return (
    <section className="z-20 text-white px-6 md:px-12 lg:px-20 py-20 font-avenir">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-oldStandardTT italic text-gray-200 mb-2">
          Full <span className="not-italic font-bold text-white">Event Production</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          We take care of everything — from planning to execution
        </p>
      </div>

      {/* Main Hero Image */}
      <div className="mb-10 h-128 overflow-hidden rounded-lg">
        <Image
          src="/event-coverage-main.jpg"
          alt="Full Event Production"
          width={1200}
          height={400}
          className="w-full h-full object-cover object-[center_55%]"
        />
      </div>

      {/* Features list */}
      <div className="flex flex-wrap justify-center text-center text-gray-300 text-sm md:text-base max-w-5xl mx-auto mb-14">
        <div className="w-1/2 md:w-1/3 p-4">
          End-to-end event management <br /> services
        </div>
        <div className="w-1/2 md:w-1/3 p-4">
          Technical crew coordination <br /> and logistics
        </div>
        <div className="w-1/2 md:w-1/3 p-4">
          Vendor and venue <br /> coordination
        </div>
        <div className="w-1/2 md:w-1/3 p-4">
          Technical consultation <br /> and setup planning
        </div>
        <div className="w-1/2 md:w-1/3 p-4">
          Real-time monitoring <br /> and troubleshooting
        </div>
        <div className="w-1/2 md:w-1/3 p-4">
          Event innovations and <br /> creative solutions
        </div>
      </div>

      {/* Gallery - 3 tilted images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-20">
        <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/event-coverage1.jpg"
            alt="Event production setup 1"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/event-coverage3.jpg"
            alt="Event production setup 2"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/event-coverage2.jpg"
            alt="Event production setup 3"
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
          HQ Entertainment delivers complete event production with quality,
          creativity, and warm, personalized service — all at a price that
          makes sense.
        </p>
      </div>

      <div className="text-center mt-12">
        <Link href="/#services" className="text-blue-400 hover:underline text-sm md:text-base">
          ← Back to Services
        </Link>
      </div>
    </section>
  );
}
