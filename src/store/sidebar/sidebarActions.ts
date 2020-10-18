import { SidebarActionTypes, TOGGLE_SIDEBAR } from './sidebarTypes';

export function toggleSidebar(): SidebarActionTypes {
  return {
    type: TOGGLE_SIDEBAR
  };
}
