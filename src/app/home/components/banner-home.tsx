"use client";

import React from "react";
import content from "@/data/home.json";

const BannerHome = () => {
  const { homeBanner } = content;
  return (
    <div className="relative bg-gradient-to-r from-red-500 to-red-700 text-white py-24 px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">{homeBanner.title}</h1>
      <p className="text-xl mb-8">{homeBanner.description}</p>
      <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
        {homeBanner.buttonText}
      </button>
    </div>
  </div>
  );
};

export default BannerHome;
