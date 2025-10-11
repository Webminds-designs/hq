import Link from "next/link";

export default function LEDWalls() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-avenir">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">LED Wall Systems</h1>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6">
        Engage your audience with vibrant visual displays:
      </p>
      <ul className="text-gray-400 text-lg text-left max-w-xl space-y-2 mb-8">
        <li>• High-resolution LED screens for any scale (P2 & P3)</li>
        <li>• Indoor and outdoor screen installations</li>
        <li>• Live video feed integration</li>
        <li>• Custom graphics, animations, and video playback</li>
      </ul>
      <p className="text-gray-300 text-lg max-w-2xl italic">
        What sets us apart: Our LED walls are built with industry-grade technology, competitively priced, and supported by a team that truly cares.
      </p>

      <Link href="/" className="mt-10 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
