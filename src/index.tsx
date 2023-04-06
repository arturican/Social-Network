import React from 'react';
import './index.css';
import {reRender} from "./render";
import {store} from "./Redux/redux-store";

store.subscribe(reRender)
reRender()
