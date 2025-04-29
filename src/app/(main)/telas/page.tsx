import FabricsSection from "@/app/(main)/telas/components/fabrics-section";
import HeroSection from "@/app/(main)/telas/components/hero-section";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { Suspense } from "react";
import data from "@/data/fabrics.json";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const Telas = async () => {
  const products = await getWooProducts({});

  return (
    <Suspense>
      <main className="isolate">
        <HeroSection />
        <FabricsSection products={products} />
      </main>
    </Suspense>
  );
};

export const metadata: Metadata = {
  title: "Tomytex | Telas",
  description: data.fabricsSection.description,
  keywords: "Telas Deportivas, Tomytex, Buenos Aires, telas, deporte",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.tomytex.com/telas",
    title: "Tomytex | Telas",
    description: data.fabricsSection.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.tomytex.com/telas",
    title: "Tomytex | Telas",
    description: data.fabricsSection.description,
  },
};

export default Telas;
