import Link from "next/link";

export default function ProSound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-avenir">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Sound Systems</h1>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6">
        We provide advanced audio solutions to suit any venue or event type:
      </p>
      <ul className="text-gray-400 text-lg text-left max-w-xl space-y-2 mb-8">
        <li>• High-quality PA systems for crystal-clear sound</li>
        <li>• Audio setup for indoor and outdoor events</li>
        <li>• Wireless microphones and audio mixing consoles</li>
        <li>• Technical support and on-site sound engineers</li>
      </ul>
      <p className="text-gray-300 text-lg max-w-2xl italic">
        What sets us apart: We use top-tier audio equipment, deliver professional sound at competitive rates, and always with a smile.
      </p>

      <Link href="/" className="mt-10 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
