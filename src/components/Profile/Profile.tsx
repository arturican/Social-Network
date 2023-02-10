import React from 'react';
import s from './Profile.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../Redux/state";


type ProfileType = {
    state: ProfilePageType
}


export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <Post post={props.state}/>
        </div>
    );
};

