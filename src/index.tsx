import React from 'react';
import './index.css';
import {reRender} from "./render";
import {store} from "./Redux/state";

store.subscribe(reRender)
reRender()
