import { combineReducers } from 'redux';
import sideBarReducer from './sidebar/sidebarReducers';

export const rootReducer = combineReducers({
  sideBar: sideBarReducer
});

export type RootState = ReturnType<typeof rootReducer>;
