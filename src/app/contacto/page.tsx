import { Mail, MapPin, Phone } from "lucide-react";
import content from "@/data/contact.json";
import ContactForm from "@/app/contacto/components/contact-form";

const ContactoInfo = () => {
  const { contactFormTitle, contactInformation, pageTitle } = content;
  return (
    <main className="flex-grow py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-red-600 text-center font-normal mb-12">
          {pageTitle}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          {/* Información de Contacto y Mapa */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl text-red-600 mb-6">
                {contactInformation.title}
              </h2>
              <div className="flex items-center mb-4">
                <MapPin size={20} className="text-red-600 mr-4" />
                <p>{contactInformation.address}</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone size={20} className="text-red-600 mr-4" />
                <p>{contactInformation.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-red-600 mr-4" />
                <p>{contactInformation.email}</p>
              </div>
            </div>

            {/* Marcador de posición del Mapa */}
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <MapPin size={48} className="text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactoInfo;
