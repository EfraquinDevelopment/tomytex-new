import HeroSectionContact from "@/app/(main)/contacto/components/hero-section-contact";
import ContactInfo from "@/app/(main)/contacto/components/contact-info";
import LocationMap from "@/app/(main)/contacto/components/location-map";
import data from "@/data/contact.json";
import { Metadata } from "next";

const ContactoInfo = () => {
  return (
    <main className="isolate">
      <HeroSectionContact />
      <ContactInfo />
      <LocationMap />
    </main>
  );
};

export const metadata: Metadata = {
  title: "Tomytex | Contacto",
  description: data.contactInfo.description,
  keywords: "Telas Deportivas, Tomytex, Buenos Aires, telas, deporte",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.tomytex.com/contacto",
    title: "Tomytex | Contacto",
    description: data.contactInfo.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.tomytex.com/contacto",
    title: "Tomytex | Contacto",
    description: data.contactInfo.description,
  },
};

export default ContactoInfo;
