"use client";

import Image from "next/image";
import Link from "next/link";

export default function ForecomsPage() {
  return (
    <section className="bg-[#0f0f10] text-white min-h-screen px-6 md:px-20 py-16 font-avenir">
      {/* Back link */}
      <Link
        href="/"
        className="text-gray-400 hover:text-white mb-8 inline-block text-sm md:text-base"
      >
        ← Back to Works
      </Link>

      {/* Title and description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-oldStandardTT italic mb-2">
          Forecoms <span className="not-italic font-bold text-white">35th Anniversary</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Corporate Anniversary Celebration
        </p>
      </div>

      {/* Description paragraph */}
      <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        A landmark celebration marking 35 years of{" "}
        <span className="italic text-gray-100">Forecoms’</span> excellence, brought to life by{" "}
        <span className="italic text-gray-100">HQ Entertainment</span>. From meticulous
        concept development to flawless execution, we crafted an immersive experience that
        reflected Forecoms’ heritage, achievements, and vision for the future.
      </p>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base text-gray-300 mb-16">
        <div>
          <h3 className="text-gray-500 uppercase tracking-wider text-xs mb-1">
            Client
          </h3>
          <p className="font-medium">Forecoms PLC</p>
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
          <p className="font-medium">Complete Event Production &amp; Management</p>
        </div>
      </div>

      {/* What Made It Shine section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl italic mb-6">
          What Made It{" "}
          <span className="not-italic font-semibold text-white">Shine</span>
        </h2>

        <ul className="text-gray-300 space-y-3 text-base md:text-lg max-w-xl mx-auto">
          <li>• End-to-end event production and management</li>
          <li>• Creative stage and experience design</li>
          <li>• Brand-aligned audiovisual production</li>
          <li>• Seamless execution reflecting Forecoms’ corporate values</li>
        </ul>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20">
        <Image
          src="/forecoms/fore1.webp"
          alt="Forecoms stage design"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/forecoms/fore2.webp"
          alt="Forecoms event lighting"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/forecoms/fore3.webp"
          alt="Forecoms anniversary celebration"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/forecoms/fore4.webp"
          alt="Corporate guests and setup"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Back to Works */}
      <div className="text-center">
        <Link
          href="/"
          className="text-blue-400 hover:underline text-sm md:text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
