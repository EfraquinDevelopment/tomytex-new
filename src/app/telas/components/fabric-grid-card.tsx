import Link from "next/link";
import React from "react";

interface FabricGridCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

const FabricGridCard = (tela: FabricGridCardProps) => {
  return (
    <div key={tela.name} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={tela.image}
          alt={tela.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            <Link href={`telas/${tela.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {tela.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{tela.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FabricGridCard;
