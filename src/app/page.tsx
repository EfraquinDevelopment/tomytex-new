import Banner from "@/app/home/components/banner";
import ContactSection from "@/app/home/components/contact-section";
import FeaturedFabrics from "@/app/home/components/featured-fabrics";
import OurStory from "@/app/home/components/our-story";


export default function MainPage() {
  return (
    <div className="isolate">
        <Banner />
        <OurStory />
        <FeaturedFabrics />
        <ContactSection />
    </div>
  )
}
