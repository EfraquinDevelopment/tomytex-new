import FabricGrid from "@/components/fabric-grid";
import { getWooProducts } from "@/data/woocommerce/getWooProducts";
import { WooProduct } from "@/types/woocommerce";
import { featuredFabrics } from "@/data/home.json";

const getFilteredProducts = (products: WooProduct[], reccomended: boolean) => {
  if (reccomended) {
    return products.filter((product) => product.featured);
  }

  return products;
};

const FeaturedFabrics = async () => {
  const products = await getWooProducts({});

  return (
    <div className="bg-[#F5F5F0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {featuredFabrics.title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {featuredFabrics.description}
          </p>
        </div>
        <div className="mt-16 flow-root sm:mt-20">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <FabricGrid products={getFilteredProducts(products, true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFabrics;
