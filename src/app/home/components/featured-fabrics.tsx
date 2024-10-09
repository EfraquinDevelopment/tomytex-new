const telasDestacadas = [
    { 
      name: 'Algodón Orgánico', 
      description: 'Suave, transpirable y ecológico.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png'
    },
    { 
      name: 'Lino Premium', 
      description: 'Fresco, duradero y elegante.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png'
    },
    { 
      name: 'Seda Natural', 
      description: 'Lujo y delicadeza en cada fibra.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qdUFidyDs6wD55AtadGLvJnSLAzcdm.png'
    },
  ]
  
  const FeaturedFabrics = () => (
    <div className="bg-[#F5F5F0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#d91817]">Nuestras Telas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Descubre la excelencia en cada fibra</p>
        </div>
        <div className="mt-16 flow-root sm:mt-20">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <ul role="list" className="mt-8 grid grid-cols-1 gap-6 divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
              {telasDestacadas.map((tela) => (
                <li key={tela.name} className="relative flex flex-col p-6">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{tela.name}</h3>
                  <p className="mt-2 flex flex-1 flex-col text-base leading-7 text-gray-600">{tela.description}</p>
                  <img src={tela.image} alt={tela.name} className="mt-6 aspect-[4/3] w-full rounded-lg object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
  
  export default FeaturedFabrics
  