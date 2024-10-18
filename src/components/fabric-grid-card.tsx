"use client";

import { WooProduct } from "@/types/woocommerce";
import DOMPurify from "dompurify";
import Link from "next/link";
import React from "react";

const FabricGridCard = (product: WooProduct) => {
  const sanitizedDescription = DOMPurify.sanitize(product.short_description, {
    ALLOWED_TAGS: [],
  });
  return (
    <div key={product.name} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.images[0].src}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            <Link href={`telas/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{sanitizedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FabricGridCard;
