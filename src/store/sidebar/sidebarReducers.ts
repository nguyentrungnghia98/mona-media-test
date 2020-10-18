import { SidebarActionTypes, SidebarState, TOGGLE_SIDEBAR } from './sidebarTypes';

const initialState: SidebarState = {
  collapsed: false
};

const sideBarReducer = (state = initialState, action: SidebarActionTypes): SidebarState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        collapsed: !state.collapsed
      };
    default:
      return state;
  }
};

export default sideBarReducer;
