import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'
import {Post} from "./Post/Post";
import {ActionsType, ProfilePageType} from "../../Redux/state";

type ProfileType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void
/*    addPost: (newPost:any)=> void
    updateNewPostText: (newPost:any)=> void*/
}

export const Profile = (props: ProfileType) => {

    let addPost = () => {
            //props.addPost(props.state.newPostText)
            props.dispatch({type: "ADD-POST", newPost: props.state.newPostText})
          /* props.updateNewPostText('')*/
            props.dispatch({type: "UPDATE-NEW-POST", newPost: ''})

    }

    let onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.updateNewPostText(e.currentTarget.value)*/
        props.dispatch({type: 'UPDATE-NEW-POST', newPost: e.currentTarget.value})
    }
    return (
        <div className={s.content}>
            <Post posts={props.state.posts}/>
            <textarea  onChange={onChangePost} value={props.state.newPostText}></textarea>
            <button onClick={addPost}>send</button>
        </div>
    );
};

