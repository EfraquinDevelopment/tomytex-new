import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";
import content from "@/data/footer.json";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { contactDetails, logoTagline, rightsText } = content;

  return (
    <footer className="bg-white border-t border-gray-200 py-8 text-gray-600">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo clickable={false} />
          <p className="max-w-xs">{logoTagline}</p>
        </div>
        <div>
          <div className="flex space-x-4 mb-2 justify-center md:justify-end">
            <a href={contactDetails.facebookUrl}>
              <Facebook size={24} />
            </a>
            <a href={contactDetails.instagramUrl}>
              <Instagram size={24} />
            </a>
          </div>
          <p>{rightsText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
