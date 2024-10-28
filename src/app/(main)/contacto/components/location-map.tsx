import { mapSection } from "@/data/contact.json";

const LocationMap = () => (
  <div className="bg-gray-50 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {mapSection.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {mapSection.description}
        </p>
      </div>
      <div className="mt-16 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6597245423915!2d-3.7037974!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zUHVlcnRhIGRlbCBTb2wsIE1hZHJpZCwgRXNwYcOxYQ!5e0!3m2!1ses!2s!4v1652795211159!5m2!1ses!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
);

export default LocationMap;
