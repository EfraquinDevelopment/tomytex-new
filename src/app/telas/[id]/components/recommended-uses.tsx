const RecommendedUses = () => {
    const uses = [
      { name: 'Ropa de bebé', description: 'Ideal para prendas delicadas en contacto con la piel sensible.' },
      { name: 'Camisetas y tops', description: 'Perfecto para prendas frescas y cómodas de uso diario.' },
      { name: 'Ropa de cama', description: 'Excelente para sábanas y fundas de almohada suaves y duraderas.' },
      { name: 'Vestidos de verano', description: 'Genial para crear prendas frescas y ligeras.' },
      { name: 'Decoración del hogar', description: 'Perfecto para cortinas, cojines y otros elementos decorativos.' },
      { name: 'Ropa interior', description: 'Ideal para prendas cómodas y transpirables.' },
    ]
  
    return (
      <div className="bg-[#F5F5F0] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Usos recomendados</h2>
            <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {uses.map((use) => (
                <li key={use.name} className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{use.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{use.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default RecommendedUses
  