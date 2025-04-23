import { WooProduct } from "@/types/woocommerce";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FabricGridCard = (product: WooProduct) => {
  const sanitizedDescription = DOMPurify.sanitize(product.short_description, {
    ALLOWED_TAGS: [],
  });
  return (
    <div
      key={product.name}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <Image
        src={product.images[0]?.src}
        alt={product.name}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <Link href={`/telas/${product.id}`}>
          <span className="absolute inset-0" />
          {product.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-300">
        {sanitizedDescription}
      </p>
    </div>
  );
};

export default FabricGridCard;
