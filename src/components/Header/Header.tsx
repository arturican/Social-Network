import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMr-sgxiABsPy1NTa8_PaTImG0S74LTRTIFg&usqp=CAU'}/>
            <div><NavLink to='/project' className={({isActive}) => (isActive ? s.active : '')}>Проекты</NavLink></div>
            <div><NavLink to='/favour' className={({isActive}) => (isActive ? s.active : '')}>Услуги</NavLink></div>
            <div><NavLink to='/post' className={({isActive}) => (isActive ? s.active : '')}>Посты</NavLink></div>
            <div><NavLink to='/feedback' className={({isActive}) => (isActive ? s.active : '')}>Отзывы</NavLink></div>
        </header>

    );
};

