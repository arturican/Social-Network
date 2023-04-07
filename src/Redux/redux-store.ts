import {combineReducers, createStore} from "redux"; 
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
});
type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export const store  = createStore(reducers)

