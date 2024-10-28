import Link from "next/link";
import data from "@/data/home.json";

const ContactSection = () => {
  const { contactUs } = data;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#d91817] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {contactUs.title}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            {contactUs.description}
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contacto"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#d91817] shadow-sm hover:bg-gray-100"
            >
              {contactUs.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
