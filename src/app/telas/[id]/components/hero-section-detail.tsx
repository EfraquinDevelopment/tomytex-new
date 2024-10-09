import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const HeroSectionDetail = () => (
  <div className="relative pt-14">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8080] to-[#d91817] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }}
      />
    </div>
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
          <div className="text-center lg:text-left lg:flex-1">
            <Link href="/telas" className="inline-flex items-center text-sm font-semibold text-[#d91817] mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Telas
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Algodón Orgánico
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubre la suavidad y sostenibilidad de nuestro algodón orgánico premium, perfecto para prendas de vestir y ropa de hogar.
            </p>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png"
              alt="Algodón Orgánico"
              className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeroSectionDetail
