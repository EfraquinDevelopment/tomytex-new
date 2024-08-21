import { generateMenuItems } from "@/config/menu-items";
import { Menu, MenuProps } from "antd";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Props = MenuProps & {
  reversed?: boolean;
};

const AppMenu = ({ reversed = false, ...menuProps }: Props) => {
  const pathname = usePathname();

  const menuItems = useMemo(() => generateMenuItems(reversed), []);

  return (
    <Menu
      style={{ border: "none" }}
      activeKey={pathname}
      items={menuItems}
      {...menuProps}
    />
  );
};

export default AppMenu;
