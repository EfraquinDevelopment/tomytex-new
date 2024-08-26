import React from "react";
import content from "@/data/home.json";

const OurHistory = () => {
  const { ourHistory } = content;
  return (
    <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-red-600 text-center font-normal mb-4">
        {ourHistory.title}
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
        {ourHistory.description}
      </p>
    </section>
  );
};

export default OurHistory;
