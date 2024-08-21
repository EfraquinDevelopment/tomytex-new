import Header from "@/components/layout/header";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-grow mx-auto">{children}</main>
      <footer className="w-full bg-tomytex-secondary text-tomytex-primary text-center p-4">
        © 2024 MyApp. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AppLayout;
