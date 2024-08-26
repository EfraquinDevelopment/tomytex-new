import BannerHome from "@/app/home/components/banner-home";
import ContactUs from "@/app/home/components/contact-us";
import OurFabrics from "@/app/home/components/our-fabrics";
import OurHistory from "@/app/home/components/our-history";
import { ArrowRight } from "lucide-react";

export default function MainPage() {
  return (
    <>
      <BannerHome />
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto">
          <OurFabrics />
          <OurHistory />
          <ContactUs />
        </div>
      </main>
    </>
  );
}
