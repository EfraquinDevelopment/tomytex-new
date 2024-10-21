import FabricsSection from "@/app/(main)/telas/components/fabrics-section";
import HeroSection from "@/app/(main)/telas/components/hero-section";
import FabricGrid from "@/components/fabric-grid";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { Suspense } from "react";

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

export default Telas;
