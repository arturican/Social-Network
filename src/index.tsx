import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppStateType, store} from "./Redux/redux-store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const reRender = (state: AppStateType) => {
    debugger
    root.render(
        <App store={store}/>
    );
}

reRender(store.getState())
store.subscribe(() => {
    let state = store.getState()
    reRender(state)
})