import Banner from "@/app/(main)/home/components/banner";
import ContactSection from "@/app/(main)/home/components/contact-section";
import FeaturedFabrics from "@/app/(main)/home/components/featured-fabrics";
import OurStory from "@/app/(main)/home/components/our-story";

export default function MainPage() {
  return (
    <div className="isolate">
      <Banner />
      <OurStory />
      <FeaturedFabrics />
      <ContactSection />
    </div>
  );
}
