import React from 'react';
import s from './Profile.module.css'
import {About} from "../About/About";
import {Post} from "./Post/Post";
import {state, PostType} from "../../Redux/state";





export const Profile = (props: PostType) => {
    return (
        <div className={s.content}>
            <Post mypost={state.mypost}/>
        </div>
    );
};

