import { Mail, MapPin, Phone } from "lucide-react";
import content from "@/data/contact.json";
import ContactForm from "@/app/contacto/components/contact-form";
import HeroSectionContact from "@/app/contacto/components/hero-section-contact";
import ContactInfo from "@/app/contacto/components/contact-info";
import LocationMap from "@/app/contacto/components/location-map";

const ContactoInfo = () => {
  return (
    <main className="isolate">
      <HeroSectionContact />
      <ContactInfo />
      <LocationMap />
    </main>
  );
};

export default ContactoInfo;
