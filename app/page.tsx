import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
// import WaveCanvas from "./Components/WaveCanvas";
import SelectedWorks from "./Components/works";
import AboutHQ from "./Components/AboutHQ";
import AnimatedLogos from "./Components/AnimatedLogos";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/*<h1 className="font-avengenz text-8xl">FONT 01 :- `font-avengenz` </h1>
      <h1 className="font-avenir font-normal text-7xl">
        FONT 02 :- `font-avenir`
      </h1>
      <h1 className="font-avenir font-Bold text-7xl">
        FONT 02 :- `font-avenir font-bold`
      </h1>
      <h1 className="font-avenir font-light text-7xl">
        FONT 02 :- `font-avenir font-light`
      </h1>
       */}
      <Navbar />
      <div className="relative z-20">
        <Hero />
      </div>
      <div className="relative z-10">
        <SelectedWorks />
      </div>

      <div className="relative z-20 mt-30">
        <Gallery />
      </div>
      <div className="relative z-20">
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
  );
}
