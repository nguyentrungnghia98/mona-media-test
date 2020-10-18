export interface SideBarMenuItem {
  menuItemName?: string;
  icon?: any;
  to?: string;
  count?: number;
  isPrimary?: boolean;
  title?: string;
  subMenus?: SideBarMenuItem[];
}
