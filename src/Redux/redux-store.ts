import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type ReducersType = typeof reducers
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
});

export const store  = createStore(reducers)