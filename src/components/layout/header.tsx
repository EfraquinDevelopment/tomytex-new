"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MENU_ITEMS } from "@/config/menu-items";
import MobileNav from "@/components/layout/mobile-nav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Tomytex</span>
            <div className="h-12 w-12 rounded-full bg-[#d91817] flex items-center justify-center">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <span className="ml-2 text-2xl font-bold text-[#d91817]">
              TOMYTEX
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#d91817] transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
