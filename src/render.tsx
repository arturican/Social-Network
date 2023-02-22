import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, state, subscribe, RootType} from "./Redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const reRender = (state: RootType) => {

    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    );
}

reRender(state)