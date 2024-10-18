const FabricFeatures = () => {
    const features = [
      { name: 'Composición', description: '100% Algodón Orgánico' },
      { name: 'Peso', description: '150 g/m²' },
      { name: 'Ancho', description: '150 cm' },
      { name: 'Textura', description: 'Suave y transpirable' },
      { name: 'Cuidados', description: 'Lavado a máquina, secado en tendedero' },
      { name: 'Certificaciones', description: 'GOTS, OEKO-TEX® Standard 100' },
    ]
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Características</h2>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
  export default FabricFeatures
  