import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WooProduct } from "@/types/woocommerce";
import Image from "next/image";

interface Props {
  product: WooProduct;
}

const HeroSectionDetail = ({ product }: Props) => {
  const sanitizedDescription = DOMPurify.sanitize(product.description, {
    ALLOWED_TAGS: [],
  });
  console.log(product);

  return (
    <div className="relative pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
            <div className="text-center lg:text-left lg:flex-1">
              <Link
                href="/telas"
                className="inline-flex items-center text-sm font-semibold text-[#d91817] mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Telas
              </Link>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {sanitizedDescription}
              </p>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-1">
              <Image
                src={product.images[0].src}
                alt={product.name}
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDetail;
