import FabricGridCard from "@/app/telas/components/fabric-grid-card";
import React from "react";

const telas = [
  {
    id: 1,
    name: "Algodón Orgánico",
    description:
      "Suave, transpirable y ecológico. Perfecto para ropa de verano y prendas de bebé.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png",
  },
  {
    id: 2,

    name: "Lino Premium",
    description:
      "Fresco, duradero y elegante. Ideal para trajes de verano y decoración del hogar.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png",
  },
  {
    id: 3,
    name: "Seda Natural",
    description:
      "Lujo y delicadeza en cada fibra. Perfecta para prendas elegantes y lencería.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png",
  },
  {
    id: 4,
    name: "Lana Merino",
    description:
      "Cálida, suave y resistente. Excelente para prendas de invierno y trajes formales.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png",
  },
  {
    id: 5,
    name: "Denim",
    description:
      "Resistente y versátil. Perfecto para jeans, chaquetas y accesorios.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png",
  },
  {
    id: 6,
    name: "Terciopelo",
    description:
      "Lujoso y suave al tacto. Ideal para tapicería y prendas de gala.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png",
  },
];

const FabricGrid = () => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {telas.map((tela) => (
        <FabricGridCard key={tela.name} {...tela} />
      ))}
    </div>
  </div>
);

export default FabricGrid;
