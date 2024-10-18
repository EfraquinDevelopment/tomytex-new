import ContactForm from "@/app/(main)/contacto/components/contact-form";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const ContactInfo = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Información de contacto
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Visítanos en nuestra tienda o contáctanos por teléfono o correo
            electrónico. Estaremos encantados de atenderte.
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Dirección</span>
                <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                Calle Principal 123
                <br />
                28001 Madrid, España
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Teléfono</span>
                <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a className="hover:text-[#d91817]" href="tel:+34 912 345 678">
                  +34 912 345 678
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Correo electrónico</span>
                <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a
                  className="hover:text-[#d91817]"
                  href="mailto:info@tomytex.com"
                >
                  info@tomytex.com
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Horario</span>
                <Clock className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                Lunes - Viernes: 9:00 - 20:00
                <br />
                Sábado: 10:00 - 14:00
                <br />
                Domingo: Cerrado
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactInfo;
