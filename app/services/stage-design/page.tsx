import Image from "next/image";
import Link from "next/link";

export default function StageDesign() {
  return (
    <section className="z-20 text-white px-6 md:px-12 lg:px-20 py-20 font-avenir">
      <Link
        href="/#services"
        className="text-gray-400 hover:text-white mb-8 inline-block text-sm md:text-base"
      >
        ← Back to Services
      </Link>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-oldStandardTT italic text-gray-200 mb-2">
          Stage <span className="not-italic font-bold text-white">Design</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          We create visually stunning and structurally sound stage setups
        </p>
      </div>

      {/* Main Hero Image */}
      <div className="mb-10 h-128 overflow-hidden rounded-lg">
        <Image
          src="/stage-main.jpg"
          alt="Stage Design"
          width={1200}
          height={400}
          className="w-full h-full object-cover object-[center_50%]"
        />
      </div>

      {/* Features list under image */}
      <div className="flex flex-wrap justify-center text-center text-gray-300 text-sm md:text-base max-w-4xl mx-auto mb-14">
        <div className="w-1/2 md:w-1/4 p-4">
          Custom-built stages <br /> for all event sizes
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Backdrops, risers, <br /> ramps, and podiums
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Thematic stage designs <br /> for weddings & concerts
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Creative elements <br /> like arches & trussing
        </div>
      </div>

      {/* Gallery - 3 tilted images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-20">
        <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/stage2.jpg"
            alt="Stage setup 1"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/stage1.jpg"
            alt="Stage setup 2"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/stage3.jpg"
            alt="Stage setup 3"
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
          Our stage setups are custom-built with premium materials (Alloy Stage) 
          yet still offered at reasonable prices, making every event stand out.
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
