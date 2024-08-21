"use client";

import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Logo } from "@/components/logo";
import AppMenu from "./app-menu";
import useDrawer from "@/hooks/useDrawer";

const Header = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  return (
    <header className="bg-tomytex-secondary text-white p-4 w-full shadow-md h-[90px]">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 justify-between w-full">
          <Logo clickable />
          <div className="hidden md:flex space-x-4">
            <AppMenu
              mode="horizontal"
              className="flex text-sm p-4 bg-tomytex-secondary text-tomytex-primary border-none"
            />
          </div>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button onClick={openDrawer}>
            <MenuOutlined className="text-xl text-tomytex-primary" />
          </button>
          <Drawer
            title={<Logo reversed />}
            placement="right"
            className="bg-tomytex-primary"
            onClose={closeDrawer}
            open={isOpen}
            destroyOnClose={true}
          >
            <AppMenu
              reversed
              onClick={closeDrawer}
              mode="vertical"
              className="text-sm p-4 border-none"
            />
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
