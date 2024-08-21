import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  reversed?: boolean;
};

export const Logo = ({ reversed = false }: Props) => {
  return (
    <div
      className={`text-xl font-medium ${
        reversed ? "text-tomytex-primary" : "text-tomytex-secondary"
      }`}
    >
      <Link href="/" className="hover:text-inherit">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={256}
          height={455}
          className="max-h-[55px] object-cover rounded-sm shadow-md"
        />
      </Link>
    </div>
  );
};
