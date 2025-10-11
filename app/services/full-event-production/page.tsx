import Link from "next/link";

export default function FullEventProduction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-avenir">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Full Event Production</h1>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6">
        We take care of everything — from planning to execution:
      </p>
      <ul className="text-gray-400 text-lg text-left max-w-xl space-y-2 mb-8">
        <li>• End-to-end event management services</li>
        <li>• Technical crew coordination and logistics</li>
        <li>• Vendor and venue coordination</li>
        <li>• Technical consultation</li>
        <li>• Real-time monitoring and troubleshooting</li>
        <li>• Event-related technical innovations and creative approach</li>
      </ul>
      <p className="text-gray-300 text-lg max-w-2xl italic">
        What sets us apart: HQ Entertainment delivers complete event production with quality, creativity, and warm, personalized service—all at a price that makes sense.
      </p>

      <Link href="/" className="mt-10 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
