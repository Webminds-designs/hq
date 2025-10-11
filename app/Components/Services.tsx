import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

import service1 from "../asserts/services/service1.webp";
import service2 from "../asserts/services/service2.webp";
import service3 from "../asserts/services/service3.webp";
import service4 from "../asserts/services/service4.webp";
import service5 from "../asserts/services/service5.webp";
import service6 from "../asserts/services/service6.webp";

interface Service {
  title: string;
  image: StaticImageData;
  path: string;
}

const services: Service[] = [
  { title: "Pro Sound", image: service1, path: "/services/pro-sound" },
  { title: "Event Lighting", image: service2, path: "/services/event-lighting" },
  { title: "Stage Design", image: service3, path: "/services/stage-design" },
  { title: "LED Walls", image: service4, path: "/services/led-walls" },
  { title: "Full Event Production", image: service5, path: "/services/full-event-production" },
  { title: "Video Production", image: service6, path: "/services/video-production" },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen md:pt-64 pt-44">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-[105px] font-avenir font-bold text-center mb-12">
          Services
        </h2>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 p-5">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.path}
            className="relative h-52 md:h-64 rounded-lg overflow-hidden group shadow-lg cursor-pointer block"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
            <span className="absolute font-avenir font-light inset-0 flex items-center justify-center text-xl md:text-2xl text-white drop-shadow-lg text-center px-2">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
