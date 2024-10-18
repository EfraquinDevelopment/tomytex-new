import FabricFeatures from "@/app/telas/[id]/components/fabric-features";
import HeroSectionDetail from "@/app/telas/[id]/components/hero-section-detail";
import RecommendedUses from "@/app/telas/[id]/components/recommended-uses";
import { getWooProduct } from "@/data/woocommerce/getWooProduct";
import React, { Suspense } from "react";

const TelaDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getWooProduct(id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Suspense>
      <main className="isolate">
        <HeroSectionDetail product={product} />
        <FabricFeatures />
        <RecommendedUses />
      </main>
    </Suspense>
  );
};

export default TelaDetail;
