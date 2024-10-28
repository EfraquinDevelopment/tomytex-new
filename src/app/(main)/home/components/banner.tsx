import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { homeBanner } from "@/data/home.json";

const Banner = () => (
  <div className="relative isolate overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <Image
        src={homeBanner.img.src}
        alt={homeBanner.img.alt}
        className="h-full w-full object-cover"
        width={1740}
        height={1160}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-600 mix-blend-multiply" />
    </div>
    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {homeBanner.title}{" "}
          <span className="text-red-200">{homeBanner.titleHighlight}</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-red-200">
          {homeBanner.description}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#d91817] shadow-sm hover:!text-red-900 hover:!border-white">
            <Link href="/telas">{homeBanner.buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
