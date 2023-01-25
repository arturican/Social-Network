import React from 'react';
import s from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div><a>Проекты</a></div>
            <div><a>Услуги</a></div>
            <div><a>Софт</a></div>
            <div><a>Обо мне</a></div>
            <div><a>Отзывы</a></div>
        </div>
    );
};

