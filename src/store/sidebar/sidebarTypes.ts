export interface SidebarState {
  collapsed: boolean;
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

interface ToggleSidebarAction {
  type: typeof TOGGLE_SIDEBAR;
}

export type SidebarActionTypes = ToggleSidebarAction;
