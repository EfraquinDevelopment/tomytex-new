import Banner from "@/app/(main)/home/components/banner";
import ContactSection from "@/app/(main)/home/components/contact-section";
import FeaturedFabrics from "@/app/(main)/home/components/featured-fabrics";
import OurStory from "@/app/(main)/home/components/our-story";
import { Metadata } from "next";
import data from "@/data/home.json";

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

export const metadata: Metadata = {
  title: "Tomytex | Home",
  description: data.ourHistory.description,
  keywords: "Telas Deportivas, Tomytex, Buenos Aires, telas, deporte",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.tomytex.com/home",
    title: "Tomytex | Home",
    images: [
      {
        url: data.homeBanner.img.src,
        width: 800,
        height: 600,
        alt: data.homeBanner.img.alt,
      },
    ],
    description: data.ourHistory.description2,
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.tomytex.com/home",
    title: "Tomytex | Home",
    images: [
      {
        url: data.homeBanner.img.src,
        width: 800,
        height: 600,
        alt: data.homeBanner.img.alt,
      },
    ],
    description: data.ourHistory.description,
  },
  verification: {
    google: "",
  },
};
