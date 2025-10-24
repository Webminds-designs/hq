"use client";

import Image from "next/image";
import Link from "next/link";

export default function SaddeMusicVideo() {
  return (
    <section className="z-20 text-white min-h-screen px-6 md:px-20 py-16 font-avenir">
      {/* Back link */}
      <Link
        href="/#works"
        className="text-gray-400 hover:text-white mb-8 inline-block text-sm md:text-base"
      >
        ← Back to Works
      </Link>

      {/* Title and description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-oldStandardTT italic mb-2">
          Sadde <span className="not-italic font-bold text-white">Music Video</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Music Video Production
        </p>
      </div>

      {/* Description paragraph */}
      <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        A bold and vibrant music video brought to life by{" "}
        <span className="italic text-gray-100">HQ Entertainment</span>, delivering
        cutting-edge <span className="italic">LED screen production and management</span>{" "}
        that amplified the energy and visual storytelling of Lahiru Perera’s{" "}
        <span className="italic">Sadde</span>.
      </p>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base text-gray-300 mb-16">
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Client
          </h3>
          <p className="font-medium">Lahiru Perera</p>
        </div>
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Year
          </h3>
          <p className="font-medium">2024</p>
        </div>
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Scope
          </h3>
          <p className="font-medium">LED Screen Production &amp; Management</p>
        </div>
      </div>

      {/* "What Made It Shine" section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl italic mb-6">
          What Made It <span className="not-italic font-semibold text-white">Shine</span>
        </h2>

        <ul className="text-gray-300 space-y-3 text-base md:text-lg max-w-xl mx-auto">
          <li>• Full LED screen production and management</li>
          <li>• Creative visuals enhancing the music narrative</li>
          <li>• Seamless execution delivering impactful, high-quality results</li>
        </ul>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20">
        <Image
          src="/sadee/sa1.webp"
          alt="Sadde lighting setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/sadee/sa2.webp"
          alt="LED background test"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        {/* <Image
          src="/sadee/sa3.webp"
          alt="Color lighting setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        /> */}
        <Image
          src="/sadee/sa4.webp"
          alt="Crew on set"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/sadee/sa5.webp"
          alt="Performers group shot"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Back to Works */}
      <div className="text-center">
        <Link
          href="/#works"
          className="text-blue-400 hover:underline text-sm md:text-base"
        >
          ← Back to Works
        </Link>
      </div>
    </section>
  );
}
