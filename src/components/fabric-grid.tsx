import FabricGridCard from "@/components/fabric-grid-card";
import { WooProduct } from "@/types/woocommerce";
import React from "react";

interface Props {
  products: WooProduct[];
}
const FabricGrid = ({ products }: Props) => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {products.map((prod) => (
        <FabricGridCard key={prod.name} {...prod} />
      ))}
    </div>
  </div>
);

export default FabricGrid;
