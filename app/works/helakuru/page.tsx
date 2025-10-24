"use client";

import Image from "next/image";
import Link from "next/link";

export default function HelakuruAGM() {
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
          Helakuru <span className="not-italic font-bold text-white">AGM 2023</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Corporate Annual General Meeting
        </p>
      </div>

      {/* Description paragraph */}
      <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        A prestigious corporate gathering brought to life by{" "}
        <span className="italic text-gray-100">HQ Entertainment</span> for our loyal client{" "}
        <span className="italic">Helakuru</span>. Utilizing <span className="italic">P2 LED technology</span>, we delivered seamless LED screen production and management, ensuring crystal-clear visuals and a professional presentation experience. Our team worked closely with Helakuru to create an engaging and impactful AGM, reflecting their brand identity and corporate values.
      </p>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base text-gray-300 mb-16">
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Client
          </h3>
          <p className="font-medium">Helakuru</p>
        </div>
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Year
          </h3>
          <p className="font-medium">2023</p>
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
          <li>• End-to-end LED screen production and management</li>
          <li>• Use of P2 LED technology for superior visuals</li>
          <li>• Enhanced audience engagement through flawless audiovisuals</li>
          <li>• Strengthened long-term client partnership with consistent delivery</li>
        </ul>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20">
        <Image
          src="/helakuru/he1.webp"
          alt="Helakuru AGM LED setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/helakuru/he2.webp"
          alt="Helakuru AGM stage visuals"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/helakuru/he3.webp"
          alt="Audience viewing AGM presentations"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/led4.jpg"
          alt="Audience viewing AGM presentations"
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
