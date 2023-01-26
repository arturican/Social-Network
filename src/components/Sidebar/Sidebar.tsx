import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div><a>Проекты</a></div>
            <div><a>Услуги</a></div>
            <div><a>Софт</a></div>
            <div><NavLink to='/about'>Обо мне</NavLink></div>
            <div><NavLink to='/post'>Посты</NavLink></div>
            <div><a>Отзывы</a></div>
        </div>
    );
};

