import Link from "next/link";

export default function StageDesign() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center font-avenir">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Stage Design</h1>
      <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-6">
        We create visually stunning and structurally sound stage setups:
      </p>
      <ul className="text-gray-400 text-lg text-left max-w-xl space-y-2 mb-8">
        <li>• Custom-built stages for all event sizes</li>
        <li>• Backdrops, risers, ramps, and podiums</li>
        <li>• Thematic stage designs for weddings and concerts</li>
        <li>• Creative elements like arches, trussing, and fabric work</li>
      </ul>
      <p className="text-gray-300 text-lg max-w-2xl italic">
        What sets us apart: Unlike standard designs, our stage setups are custom-built with premium materials (Alloy Stage)—yet still offered at reasonable prices.
      </p>

      <Link href="/" className="mt-10 text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </section>
  );
}
