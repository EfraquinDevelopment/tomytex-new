import React from "react";
import content from "@/data/home.json";

const OurHistory = () => {
  const { ourHistory } = content;
  return (
    <section className="mb-24 bg-white rounded-lg shadow-lg p-8 md:p-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {ourHistory.title}
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed text-lg">
        {ourHistory.description}
      </p>
    </section>
  );
};

export default OurHistory;
