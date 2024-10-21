import AppLayout from "@/layouts/app-layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOMYTEX | Telas Deportivas | Local de Telas",
  description:
    "Descubre TOMYTEX, el local líder en telas deportivas. Telas de alta calidad para indumentaria deportiva, fitness y más. ¡Visítanos hoy!",
  keywords:
    "TOMYTEX, telas deportivas, Buenos Aires, Flores, telas para indumentaria deportiva, telas de alta calidad, telas fitness, venta de telas deportivas",
  robots: "index, follow",
  openGraph: {
    title: "TOMYTEX | Telas Deportivas",
    description:
      "TOMYTEX ofrece una amplia gama de telas deportivas de alta calidad para indumentaria deportiva, fitness y más. Encuentra las mejores telas en nuestro local de Flores, Buenos Aires.",
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
