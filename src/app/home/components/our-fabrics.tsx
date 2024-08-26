import { ArrowRight } from "lucide-react";
import React from "react";
import content from "@/data/home.json";
import Link from "next/link";

const OurFabrics = () => {
  const { fabricsSection } = content;
  return (
    <section className="mb-16">
      <h2 className="text-3xl text-red-600 text-center font-normal mb-8">
        {fabricsSection.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {fabricsSection.fabrics.map((fabric) => (
          <div key={fabric.id} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-red-600 text-2xl mb-4">{fabric.name}</h3>
            <p className="text-gray-600 mb-4">{fabric.description}</p>
            <Link
              href={"/telas/" + fabric.id}
              className="text-red-600 font-bold hover:underline"
            >
              Saber más →
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/telas"
          className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded text-lg font-bold hover:bg-red-700 transition duration-300"
        >
          {fabricsSection.buttonText}
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default OurFabrics;
