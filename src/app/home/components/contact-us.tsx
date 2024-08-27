import React from "react";
import content from "@/data/home.json";

const ContactUs = () => {
  const { contactUs } = content;
  return (
    <section className="text-center bg-gradient-to-r from-red-500 to-red-700 p-12 rounded-lg text-white shadow-lg">
      <h2 className="text-4xl font-bold mb-4">{contactUs.title}</h2>
      <p className="mb-8 text-lg max-w-2xl mx-auto">{contactUs.description}</p>
      <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md">
        {contactUs.buttonText}
      </button>
    </section>
  );
};

export default ContactUs;
