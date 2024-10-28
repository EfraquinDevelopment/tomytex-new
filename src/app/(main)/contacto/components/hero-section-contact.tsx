import Image from "next/image";
import { hero } from "@/data/contact.json";

const HeroSectionContact = () => (
  <div className="relative isolate overflow-hidden bg-red-600 py-24 sm:py-32">
    <Image
      src={hero.img.src}
      alt={hero.img.alt}
      width={2070}
      height={2587}
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
    />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-red-200">
          {hero.description}
        </p>
      </div>
    </div>
  </div>
);

export default HeroSectionContact;
