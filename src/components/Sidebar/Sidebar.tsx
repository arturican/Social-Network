import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div><NavLink to='/project' className={({isActive}) => (isActive ? s.active : '')}>Проекты</NavLink></div>
            <div><NavLink to='/favour' className={({isActive}) => (isActive ? s.active : '')}>Услуги</NavLink></div>
            <div><NavLink to='/soft' className={({isActive}) => (isActive ? s.active : '')}>Софт</NavLink></div>
            <div><NavLink to='/about' className={({isActive}) => (isActive ? s.active : '')}>Обо мне</NavLink></div>
            <div><NavLink to='/post' className={({isActive}) => (isActive ? s.active : '')}>Посты</NavLink></div>
            <div><NavLink to='/feedback' className={({isActive}) => (isActive ? s.active : '')}>Отзывы</NavLink></div>
        </div>
    );
};

