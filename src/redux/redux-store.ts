import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {StoreType} from "./store";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer})

export const store: any = createStore(reducers)
