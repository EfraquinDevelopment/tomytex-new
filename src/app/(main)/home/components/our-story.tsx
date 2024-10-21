import { ArrowRight } from "lucide-react";
import Image from "next/image";

const OurStory = () => (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-red-600">
              Nuestra Historia
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TOMYTEX: Tejiendo sueños deportivos desde 1975
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TOMYTEX nació como un pequeño negocio familiar con una gran pasión
              por las telas deportivas. A lo largo de los años, hemos
              evolucionado para satisfacer las demandas cambiantes de los
              atletas y entusiastas del fitness, manteniendo siempre nuestro
              compromiso con la calidad y la innovación.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {[
                {
                  name: "Innovación",
                  description:
                    "Constantemente desarrollamos nuevas telas para mejorar el rendimiento deportivo.",
                },
                {
                  name: "Calidad",
                  description:
                    "Utilizamos los mejores materiales y procesos para garantizar la durabilidad de nuestras telas.",
                },
                {
                  name: "Sostenibilidad",
                  description:
                    "Nos comprometemos con prácticas sostenibles en toda nuestra cadena de producción.",
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <ArrowRight
                      className="absolute left-1 top-1 h-5 w-5 text-red-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                    {": "}
                  </dt>
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900">
          <Image
            src="/img/our-story.png"
            alt="Telas deportivas"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            width={1470}
            height={2613}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black">
            <h3 className="text-xl font-semibold text-white">
              Innovación en cada fibra
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurStory;
