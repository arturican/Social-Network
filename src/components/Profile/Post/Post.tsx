import React from 'react';
import s from '../Post/Post.module.css'
import {PostType} from "../../../Redux/state";







export const Post = (props: PostType) => {
    return (
        <div>
            <h2 className={s.h2}>Мои посты</h2>
            {props.mypost.map(t => { return (
            <div className={s.content} key={t.likes}>
                <img src={t.src} alt="аватарка падны"/>
                <p>{t.message}</p>
                <div>{t.likes}&#9829;</div>
            </div>
        )})}</div>





    );
};

