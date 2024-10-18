import HeroSection from "@/app/telas/components/hero-section";
import FabricGrid from "@/components/fabric-grid";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { Suspense } from "react";

const Telas = async () => {
  const products = await getWooProducts({});

  return (
    <Suspense>
      <main className="isolate">
        <HeroSection />
        <FabricGrid products={products} />
      </main>
    </Suspense>
  );
};

export default Telas;
