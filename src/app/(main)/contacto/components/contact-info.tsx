import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contact.json";

const ContactInfo = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {contactInfo.title}
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              {contactInfo.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                <MapPin className="h-6 w-6 text-red-600 mb-2" />
                {contactInfo.addressSection.title}
              </h3>
              <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>{contactInfo.addressSection.address1}</p>
                <p>{contactInfo.addressSection.address2}</p>
              </address>
            </div>
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                <Phone className="h-6 w-6 text-red-600 mb-2" />
                {contactInfo.phoneSection.title}
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <dd>
                  <a className="hover:text-red-600" href="tel:+34912345678">
                    {contactInfo.phoneSection.phone1}
                  </a>
                </dd>
              </dl>
            </div>
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                <Mail className="h-6 w-6 text-red-600 mb-2" />
                {contactInfo.emailSection.title}
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <dd>
                  <a
                    className="hover:text-red-600"
                    href="mailto:ventas@tomytex.com"
                  >
                    {contactInfo.emailSection.email1}
                  </a>
                </dd>
              </dl>
            </div>
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                <Clock className="h-6 w-6 text-red-600 mb-2" />
                {contactInfo.hoursSection.title}
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <dt>{contactInfo.hoursSection.days}</dt>
                <dd>{contactInfo.hoursSection.hours}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
