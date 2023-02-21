import {reRender} from "../index";


export type ProfilePageType = {
    posts: Array<PostType>
}

export type PostType = {
    src: string
    message: string
    likes: number
}


export type UsersType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
    name: string
    img: string
}
export type DialogPageType = {
    users: Array<UsersType>
    messages: Array<MessagesType>
}


export type RootType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}


export const state: RootType = {
    profilePage: {
        posts: [
            {
                src: "https://i.ibb.co/CQ80wbD/photo-2021-11-21-21-54-15.jpg",
                message: 'Всем привет! ✨\n' +
                    'Меня зовут Диляра, и вчера на известном ресурсе Яндекса я начала обучение графическому дизайну.\n' +
                    'Это моя школьная мечта, и, возможно, настало время ей воплотиться.\n' +
                    'Здесь я буду делиться этапами обучения, своими успехами (и неуспехами),\n' +
                    'показывать работы и многое другое.\n' +
                    'Спасибо, что читаете!',
                likes: 120
            },
            {
                src: "https://i.ibb.co/CQ80wbD/photo-2021-11-21-21-54-15.jpg",
                message: 'Фото канала обновлено ✌🏻\n' +
                    '\n' +
                    'Прежде чем приступить к выполнению, я собрала мудборд из референсов (теперь это слова, которые я буду использовать).\n' +
                    '\n' +
                    'Далее я подумала о самом слове step — «шаг», «ступень». Идея была в том, чтобы изобразить лестницу, но повозившись с перспективой, поиграв с оформлением полосочек, я пришла к тому, что исполнение у меня очень хромает.\n' +
                    '\n' +
                    '«Мне нравится геометрия», — вспомнила я, а еще уродливый (читай причудливый) дизайн документов-word и презентаций в стиле 2000-ых. Добавила к этому изображение голограммы (отсылка к дискам), позаимствовала оттуда цветовую палитру, и вот конечный результат. На фоне очень тонкой линией я добавила как будто путаницу из нитей — моих мыслей.\n' +
                    '\n' +
                    'Вряд ли я смогла соблюсти баланс и композицию, но картинка получилась веселой и, как будто, последовательной — прямо как мое предстоящее обучение. \n' +
                    '\n' +
                    'Вот такая получилась история одного маленького изображения 👻',
                likes: 100
            },
        ]
    },
    dialogPage: {
        users: [
            {id: 1, name: 'Artur'},
            {id: 2, name: 'Dilyara'},
        ],
        messages: [
            {id: 1, message: 'Hi, Dilyara!', name: 'Artur', img: 'https://lh3.googleusercontent.com/-E65lnxcLZ0c/AAAAAAAAAAI/AAAAAAAAAAA/APmPUbE0IrJSL-ECAqp4sVteYG-JudFuLg/photo.jpg?sz=200'},
            {id: 2, message: 'Hi, Artur!', name: 'Dilyara', img: 'https://cdn4.telegram-cdn.org/file/JzgWrSGqjMQKidX3UVVu59zNguNCAU8Iv53XMgGfP489S0EDaLNmRQXY7JZSgiwxIWYM8ej4Z870bE43CIP414-Dkf_UC4FI8VCIU6aRiuLy8z4wTtheaaDQw_Zn13Jg-3YIdNrZCo5fkuZo1zXZ9zwkL7DC9rQ3l7WEd2O5nJpW0iJOU9egNcb3mCl_96HnIgXMgdjeI459AgyZoCfqJ3amBh5X9TmgMft64alJvJPQdrNV9RtKYsUhw_yEI4byU4ReIzom-oXUIWgTPtA4JA2sOPO4sdPk_UkgkyijLVFW5Y_H1r4zcg3Jc09nBJ8taLhm7_c85gJ1QftkT9J7kw.jpg'}
        ]
    }

}


export const addPost = (newPost: any) => {
    const newMessage = {
            src: "https://i.ibb.co/CQ80wbD/photo-2021-11-21-21-54-15.jpg",
            message: newPost,
            likes: 0
        }

        state.profilePage.posts.push(newMessage);
        reRender(state)

}
