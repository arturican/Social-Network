import React from 'react';
import s from './About.module.css'

export const About = () => {
    return (
        <div className={s.content}>
            <img src="https://i.ibb.co/vsrXHMd/photo-2020-12-08-18-05-27.jpg" alt="Диляра"/>
            <div>
                <h3>Москвичёва Диляра</h3>
                <h1>Графический дизайнер</h1>
                <p>Привет! Меня зовут Диляра. Я графический</p>
                <p>дизайнер из Казани. Специализируюсь на</p>
                <p>логотипах, айдентике и графике.</p>
                <p>Помогу решить задачи связанные с визуальным</p>
                <p>представлением Вашей компании на рынке</p>
        </div>
        </div>
    );
};
