import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";
import content from "@/data/footer.json";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const {
    contactDetails,
    logoTagline,
    rightsText,
    quickLinksTitle,
    quickLinks,
  } = content;

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="text-gray-400">{logoTagline}</p>
          </div>
          <nav className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold mb-4">{quickLinksTitle}</h3>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-lharmonie-primary hover:text-lharmonie-primary/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href={contactDetails.facebookUrl}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href={contactDetails.instagramUrl}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>{rightsText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
