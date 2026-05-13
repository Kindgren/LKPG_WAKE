import type { TranslationKey } from "./translationKeys";

type MenuItemData = {
  key: TranslationKey;
  path: string;
  icon: string; // Add an icon property for each menu item
};

export const menuItems: MenuItemData[] = [
  { key: "start", path: "/home", icon: "pi pi-home" },
  {
    key: "queue",
    path: "https://saasqueue.staging.stenite.com/v/9PdKrGenWJC6RFZLQohxoZjwUPE8l9JJ",
    icon: "pi pi-list",
  },
  { key: "about", path: "/about", icon: "pi pi-info-circle" },
  { key: "contact", path: "/contact", icon: "pi pi-envelope" },
  {
    key: "operator",
    path: "https://saasqueue.staging.stenite.com/op/08sfsA9myKn0AKovQgkUP3tF6YWeSIon",
    icon: "pi pi-lock",
  },
];
