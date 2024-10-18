"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NextTopLoader color="#d91817" />
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-grow w-full mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
