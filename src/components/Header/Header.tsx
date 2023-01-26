import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMr-sgxiABsPy1NTa8_PaTImG0S74LTRTIFg&usqp=CAU'}/>
            <div><a>Проекты</a></div>
            <div><a>Услуги</a></div>
            <div><a href={'/post'}>Посты</a></div>
            <div><a>Отзывы</a></div>
        </header>

    );
};

