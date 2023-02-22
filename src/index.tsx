import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, state, subscribe, RootType} from "./Redux/state";
import {reRender} from "./render";




subscribe(reRender)

