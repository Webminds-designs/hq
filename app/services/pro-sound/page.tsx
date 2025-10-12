import Image from "next/image";
import Link from "next/link";

export default function ProSound() {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 font-avenir">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-oldStandardTT italic text-gray-200 mb-2">
          Sound <span className="not-italic font-bold text-white">Systems</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          We provide advanced audio solutions to suit any venue or event type
        </p>
      </div>

      {/* Main Hero Image */}
      <div className="mb-10 h-128 overflow-hidden rounded-lg">
        <Image
          src="/sound-main.jpg"
          alt="Professional Sound Systems"
          width={1200}
          height={400}
          className="w-full h-full object-cover object-[center_50%]"
        />
      </div>

      {/* Features list under image */}
      <div className="flex flex-wrap justify-center text-center text-gray-300 text-sm md:text-base max-w-4xl mx-auto mb-14">
        <div className="w-1/2 md:w-1/4 p-4">
          High-quality PA systems <br /> for crystal-clear sound
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Audio setup for <br /> indoor & outdoor events
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          Wireless microphones <br /> & mixing consoles
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          On-site technical support <br /> & sound engineers
        </div>
      </div>

      {/* Gallery - 3 tilted images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-20">
        <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/sound1.jpg"
            alt="Sound setup 1"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/sound2.jpg"
            alt="Sound setup 2"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
          <Image
            src="/sound3.jpg"
            alt="Sound setup 3"
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
          We use top-tier audio equipment, deliver professional sound at competitive rates, 
          and always with a friendly, dedicated team.
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
