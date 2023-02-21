import React from 'react';
import s from './Profile.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../Redux/state";

type ProfileType = {
    state: ProfilePageType
    addPost: (newPost:any)=> void
    updateNewPostText: (newPost:any)=> void
}

export const Profile = (props: ProfileType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
            props.updateNewPostText('')
        }

    }

    let onChangePost = () => {
        if(newPostElement.current){
            props.updateNewPostText(newPostElement.current.value)
        }

    }

    return (
        <div className={s.content}>
            <Post posts={props.state.posts}/>
            <textarea ref={newPostElement} onChange={onChangePost} value={props.state.newPostText}></textarea>
            <button onClick={addPost}>send</button>
        </div>
    );
};

