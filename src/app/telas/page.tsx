import FabricGrid from "@/app/telas/components/fabric-grid";
import HeroSection from "@/app/telas/components/hero-section";

const Telas = async () => {
  return (
    <main className="isolate">
      <HeroSection />
      <FabricGrid />
    </main>
  );
};

export default Telas;
