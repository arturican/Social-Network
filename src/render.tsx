import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./Redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const reRender = () => {

    root.render(
        <App store={store}/>
    );
}

