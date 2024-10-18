import HeroSectionContact from "@/app/(main)/contacto/components/hero-section-contact";
import ContactInfo from "@/app/(main)/contacto/components/contact-info";
import LocationMap from "@/app/(main)/contacto/components/location-map";

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
