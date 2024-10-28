import Image from "next/image";
import { hero } from "@/data/fabrics.json";

const HeroSection = () => (
  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <Image
      src={hero.img.src}
      alt={hero.img.alt}
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      width={1470}
      height={980}
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {hero.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {hero.description}
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;
