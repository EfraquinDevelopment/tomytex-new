import BgPolygon from "@/components/bg-polygon";

const HeroSection = () => (
  <div className="relative pt-14">
    <BgPolygon />
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Nuestras Telas
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre nuestra amplia selección de telas de alta calidad. Desde
            algodón orgánico hasta lujosa seda, tenemos la tela perfecta para tu
            próximo proyecto.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
