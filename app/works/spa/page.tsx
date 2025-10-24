"use client";

import Image from "next/image";
import Link from "next/link";

export default function SpaCeylon() {
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
          Spa Ceylon <span className="not-italic font-bold text-white">Immersive Experience</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          LED Screen Production &amp; Management
        </p>
      </div>

      {/* Description paragraph */}
      <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        A groundbreaking immersive brand experience proudly powered by{" "}
        <span className="italic text-gray-100">HQ Entertainment</span>, featuring complete{" "}
        <span className="italic">LED screen production and management</span> using{" "}
        <span className="italic">P2 LED technology</span> and user-interactive{" "}
        <span className="italic">3D modeling built on Unity 3D software</span>. This first-of-its-kind project in Sri Lanka set a new standard for innovation in experiential marketing and was honored with the{" "}
        <span className="italic">Silver DIGIS Award for Best Use of Experiential/Immersive Marketing</span>.
      </p>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base text-gray-300 mb-16">
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Client
          </h3>
          <p className="font-medium">Spa Ceylon</p>
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
          <li>• Full LED screen production using P2 LED technology</li>
          <li>• User-interactive 3D modeling built on Unity 3D software</li>
          <li>• First immersive brand experience of its kind in Sri Lanka</li>
          <li>• Recognized with the Silver DIGIS Award for Best Experiential/Immersive Marketing</li>
        </ul>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20">
        {/* <Image
          src="/spa/spa8.webp"
          alt="Spa Ceylon LED setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        /> */}

                <Image
          src="/spa/spa9.webp"
          alt="LED visuals and stage setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/spa/spa5.webp"
          alt="Interactive 3D model display"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/spa/spa3.webp"
          alt="Audience interacting with the installation"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        {/* <Image
          src="/spa/spa9.webp"
          alt="LED visuals and stage setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        /> */}
        <Image
          src="/spa7.jpg"
          alt="Full immersive experience view"
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
