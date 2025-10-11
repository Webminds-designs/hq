import Link from "next/link";

export default function VideoProduction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-avenir">
      {/* <Navbar /> */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Video Production</h1>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6">
        Capture and create unforgettable moments:
      </p>
      <ul className="text-gray-400 text-lg text-left max-w-xl space-y-2 mb-8">
        <li>• Professional videography with multi-camera angles</li>
        <li>• Drone coverage for aerial shots</li>
        <li>• Real-time event coverage and live streaming</li>
        <li>• Highlight reels and full-length edits</li>
        <li>• Live streaming</li>
      </ul>
      <p className="text-gray-300 text-lg max-w-2xl italic">
        What sets us apart: We produce cinematic-quality videos using high-end gear, and we treat every client like family throughout the process.
      </p>

      <Link href="/" className="mt-10 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
