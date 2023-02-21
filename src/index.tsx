import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, RootType, state} from "./Redux/state";
import {reRender} from "./render";


reRender(state)


