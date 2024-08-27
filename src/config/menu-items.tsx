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
  pathname: string
): ItemType<MenuItemType>[] => {
  return MENU_ITEMS.map((item) => {
    const isActive = pathname === item.link;
    return {
      key: item.link,
      label: (
        <div className="header-nav-item ">
          <Link
            style={{
              ...(isActive && {
                color: "#232323",
                fontWeight: "bold",
              }),
            }}
            href={item.link}
          >
            {item.title}
          </Link> 
        </div>
      ),
    };
  });
};
