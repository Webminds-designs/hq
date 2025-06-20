// components/Services.tsx
import Image from "next/image";
import { StaticImageData } from "next/image";

import service1 from "../asserts/services/service1.webp";
import service2 from "../asserts/services/service2.webp";
import service3 from "../asserts/services/service3.webp";
import service4 from "../asserts/services/service4.webp";
import service5 from "../asserts/services/service5.webp";
import service6 from "../asserts/services/service6.webp";
import WaveCanvas from "./WaveCanvas";

interface Service {
  title: string;
  image: StaticImageData;
}

const services: Service[] = [
  { title: "Pro Sound", image: service1 },
  { title: "Event Lighting", image: service2 },
  { title: "Stage Design", image: service3 },
  { title: "LED Walls", image: service4 },
  { title: "Full Event Production", image: service5 },
  { title: "Video Production", image: service6 },
];

export default function Services() {
  return (
    <section className="h-screen md:pt-64">
    
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-8xl font-avenir font-bold text-center mb-12">
          Services
        </h2>
      </div>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative h-52 md:h-64 rounded-lg overflow-hidden group shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0   transition duration-300" />
          <span className="absolute font-avenir font-light inset-0 flex items-center justify-center text-xl md:text-2xl  text-white drop-shadow-lg text-center px-2">
  {service.title}
</span>

          </div>
        ))}
      </div>
    </section>
  );
}
