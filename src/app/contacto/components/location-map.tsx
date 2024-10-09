const LocationMap = () => (
    <div className="bg-[#F5F5F0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestra ubicación</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Visítanos en nuestra tienda para ver y sentir la calidad de nuestras telas en persona.
          </p>
          <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6597905640403!2d-3.703550684596592!3d40.41694077936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d6da3df33%3A0x6e5b9c72a4c3719f!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1633612707130!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Tomytex"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
  
  export default LocationMap
  