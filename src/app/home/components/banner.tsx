import BgPolygon from "@/components/bg-polygon";

const Banner = () => (
  <div className="relative pt-14">
    <BgPolygon />
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl">
              Descubre la magia de nuestras telas en{" "}
              <span className="text-[#d91817]">TOMYTEX</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En TOMYTEX, ofrecemos una cuidadosa selección de telas de alta
              calidad para todos tus proyectos creativos. Desde 1975, inspirando
              a nuestra comunidad local con textiles excepcionales.
            </p>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-1">
            <div className="relative lg:flex lg:items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png"
                alt="Colección de telas Tomytex"
                className="w-full rounded-2xl shadow-xl ring-1 ring-gray-900/10"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
