import Link from "next/link";

export default function EventLighting() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-avenir">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Lighting Systems</h1>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6">
        Transform any space with immersive lighting design:
      </p>
      <ul className="text-gray-400 text-lg text-left max-w-xl space-y-2 mb-8">
        <li>• Intelligent moving lights and stage lighting</li>
        <li>• Ambient and decorative lighting setups</li>
        <li>• Uplighting, spotlighting, and wash lights</li>
        <li>• DMX-controlled systems for dynamic effects</li>
      </ul>
      <p className="text-gray-300 text-lg max-w-2xl italic">
        What sets us apart: Our lighting setups are not only visually stunning but also budget-conscious and managed by a friendly, creative team.
      </p>

      <Link href="/" className="mt-10 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
