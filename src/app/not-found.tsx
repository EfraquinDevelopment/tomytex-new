import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-tomytex-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-tomytex-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#b31412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomytex-primary"
          >
            Volver al inicio
          </Link>
          <Link
            href="/telas"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-tomytex-primary shadow-sm ring-1 ring-inset ring-tomytex-primary hover:bg-gray-50"
          >
            Ver catálogo de telas
          </Link>
        </div>
      </div>
    </div>
  );
}
