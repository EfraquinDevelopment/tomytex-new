import FabricGrid from "@/components/fabric-grid";
import { WooProduct } from "@/types/woocommerce";
import React from "react";

interface Props {
  products: WooProduct[];
}

const FabricsSection = ({ products }: Props) => {
  return (
    <div className="mt-6">
      <div className="mx-auto max-w-2xl text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl">
          Nuestras Telas
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Explora nuestra selección de telas diseñadas para potenciar tu
          rendimiento deportivo.
        </p>
      </div>
      <FabricGrid products={products} />
    </div>
  );
};

export default FabricsSection;
