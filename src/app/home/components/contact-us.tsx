import React from "react";
import content from "@/data/home.json";

const ContactUs = () => {
  const { contactUs } = content;
  return (
    <section className="text-center bg-red-600 p-8 rounded-lg text-white">
      <h2 className="text-3xl font-normal mb-4">{contactUs.title}</h2>
      <p className="mb-8 max-w-2xl mx-auto">{contactUs.description}</p>
      <button className="bg-white text-red-600 px-8 py-3 rounded text-lg font-bold hover:bg-gray-100 transition duration-300">
        {contactUs.buttonText}
      </button>
    </section>
  );
};

export default ContactUs;
