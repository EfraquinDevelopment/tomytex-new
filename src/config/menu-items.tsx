import Link from "next/link";
import { MenuItemType, ItemType } from "antd/es/menu/interface";

export const MENU_ITEMS = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Nuestras telas",
    link: "/telas",
  },
  {
    title: "Contacto",
    link: "/contacto",
  },
];

export const generateMenuItems = (
  reversed = false
): ItemType<MenuItemType>[] => {
  return MENU_ITEMS.map((item) => ({
    key: item.link,
    label: (
      <Link className="text-tomytex-secondary" href={item.link}>
        {item.title}
      </Link>
    ),
    style: { color: reversed ? "black" : "#d91817",fontWeight: "bold", fontSize: "16px" },
  }));
};
