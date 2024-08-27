import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  reversed?: boolean;
  clickable?: boolean;
};

export const LogoItem = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">T</span>
        </div>
        <span className="text-red-600 font-bold text-2xl tracking-tight">
          Tomytex
        </span>
      </div>
    </div>
  );
};

export const Logo = ({ reversed = false, clickable = false }: Props) => {
  return (
    <div
      className={`text-xl font-medium ${
        reversed ? "text-tomytex-primary" : "text-tomytex-secondary"
      }`}
    >
      {clickable ? (
        <Link href="/" className="hover:text-inherit">
          <LogoItem />
        </Link>
      ) : (
        <LogoItem />
      )}
    </div>
  );
};
