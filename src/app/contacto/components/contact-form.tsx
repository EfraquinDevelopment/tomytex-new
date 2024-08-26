import React from "react";
import content from "@/data/contact.json";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { contactFormTitle } = content;
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl text-red-600 mb-6">{contactFormTitle}</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center bg-red-600 text-white px-6 py-3 rounded text-lg hover:bg-red-700 transition duration-300"
        >
          <Send size={20} className="mr-2" />
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
