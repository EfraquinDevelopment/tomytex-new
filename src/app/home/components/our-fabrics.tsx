import { ArrowRight } from "lucide-react";
import React from "react";
import content from "@/data/home.json";
import Link from "next/link";
import Image from "next/image";

const OurFabrics = () => {
  const { fabricsSection } = content;
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        {fabricsSection.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fabricsSection.fabrics.map((fabric) => (
          <div
            key={fabric.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl"
          >
            <Image
              width={1600}
              height={1200}
              src={fabric.imageUrl}
              alt={fabric.name}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {fabric.name}
              </h3>
              <p className="text-gray-600 mb-4">{fabric.description}</p>
              <Link
                href={fabric.callToAction + "/" + fabric.id}
                className="text-red-600 font-semibold hover:text-red-700 transition duration-300"
              >
                Saber más →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/telas"
          className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 shadow-lg"
        >
          {fabricsSection.buttonText}
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default OurFabrics;
