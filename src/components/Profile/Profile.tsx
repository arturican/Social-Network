import React from 'react';
import s from './Profile.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../Redux/state";

type ProfileType = {
    state: ProfilePageType
    addPost: ((newPost:any)=> void)
}

export const Profile = (props: ProfileType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
   /* let addPost = () => {
        alert(newPostElement.current?.value)

    }*/

    let message = newPostElement.current?.value
    return (
        <div className={s.content}>
            <Post posts={props.state.posts}/>
            <textarea ref={newPostElement}></textarea>
            <button onClick={()=>props.addPost(message)}>send</button>
        </div>
    );
};

