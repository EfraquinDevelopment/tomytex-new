const OurStory = () => (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#d91817]">Nuestra Historia</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">TOMYTEX: Tejiendo sueños desde 1975</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TOMYTEX nació como un pequeño negocio familiar con una gran pasión por las telas...
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-50">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png"
                alt="Imagen histórica de Tomytex"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
  export default OurStory
  