import type { TranslationKey } from "./translationKeys";

type MenuItemData = {
  key: TranslationKey;
  path: string;
  icon: string; // Add an icon property for each menu item
};

export const menuItems: MenuItemData[] = [
  { key: "start", path: "/home", icon: "pi pi-home" },
  { key: "shop", path: "/booking", icon: "pi pi-shopping-cart" },
  { key: "queue", path: "/queue", icon: "pi pi-clock" },
  { key: "about", path: "/about", icon: "pi pi-info-circle" },
  { key: "contact", path: "/contact", icon: "pi pi-envelope" },
];
