import FabricFeatures from "@/app/(main)/telas/[id]/components/fabric-features";
import HeroSectionDetail from "@/app/(main)/telas/[id]/components/hero-section-detail";
import { getWooProduct } from "@/data/woocommerce/getWooProduct";
import { Metadata } from "next";
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
        <FabricFeatures product={product} />
      </main>
    </Suspense>
  );
};

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await getWooProduct(id);

  if (!product) {
    return {};
  }

  const metaDescription = `${product.name}. ${product.short_description || ""}`;
  const productImage = product.images[0]?.src || "";

  return {
    title: `Tomytex | ${product.name}`,
    description: metaDescription,
    keywords: `tela, ${product.name}, deportivo, telas deportivas`,
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: `https://www.tomytex.com/telas/${id}`,
      title: product.name,
      description: metaDescription,
      images: [
        {
          url: productImage,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      url: `https://www.tomytex.com/telas/${id}`,
      title: product.name,
      description: metaDescription,
      image: productImage,
    },
  };
};

export default TelaDetail;
