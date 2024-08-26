"use client";

import React from "react";
import content from "@/data/home.json";

const BannerHome = () => {
  const { homeBanner } = content;
  return (
    <div className="bg-gray-300 h-96 flex items-center justify-center text-white">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-normal mb-4">
          {homeBanner.title}
        </h1>
        <p className="text-xl mb-8">{homeBanner.description}</p>
        <button className="bg-red-600 text-white px-8 py-3 rounded text-lg hover:bg-red-700 transition duration-300">
          {homeBanner.buttonText}
        </button>
      </div>
    </div>
  );
};

export default BannerHome;
