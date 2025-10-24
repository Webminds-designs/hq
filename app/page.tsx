import Head from "next/head";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import SelectedWorks from "./Components/works";
import AboutHQ from "./Components/AboutHQ";
import AnimatedLogos from "./Components/AnimatedLogos";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>
          HQ Entertainment | Live Events, Concerts & Event Production in Sri Lanka
        </title>
        <meta
          name="description"
          content="HQ Entertainment delivers world-class live event production, LED screen management, stage design, and immersive experiences for concerts, corporate events, and cultural festivals in Sri Lanka."
        />
        <meta
          name="keywords"
          content="HQ Entertainment, Event Production, Concerts, Stage Design, LED Walls, Corporate Events, Sri Lanka, Live Shows, Video Production"
        />
        <meta name="author" content="HQ Entertainment" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="HQ Entertainment | Live Events & Productions"
        />
        <meta
          property="og:description"
          content="Delivering immersive event experiences, LED screen management, and creative stage design across Sri Lanka."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hqentertainmentsl.com/" />
        <meta property="og:image" content="https://hqentertainmentsl.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HQ Entertainment | Live Events & Productions"
        />
        <meta
          name="twitter:description"
          content="Delivering immersive event experiences, LED screen management, and creative stage design across Sri Lanka."
        />
        <meta name="twitter:image" content="https://hqentertainmentsl.com/og-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://hqentertainmentsl.com/" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HQ Entertainment",
              "url": "https://hqentertainmentsl.com/",
              "logo": "https://hqentertainmentsl.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/p/HQ-Entertainment-100086130378100/",
                "https://www.instagram.com/hq.entertainmentglobal/?hl=en",
                "https://www.tiktok.com/@hqentertainment83"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@hqentertainmentsl.com",
                "telephone": "+94714320017",
                "contactType": "customer service"
              }
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <div className="relative z-20">
          <Hero />
        </div>
        <div id="works" className="relative z-10">
          <SelectedWorks />
        </div>

        <div className="relative z-20 mt-30">
          <Gallery />
        </div>
        <div id="services" className="relative z-20">
          <Services />
        </div>
        <div className="relative z-0">
          <AboutHQ />
        </div>

        <div className="relative z-20">
          <AnimatedLogos />
        </div>

        <div className="relative z-0 mt-30">
          <Contact />
        </div>
      </div>
    </>
  );
}
