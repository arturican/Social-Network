import {ActionsType, PostType} from "../types/entities";

export type InitialStateType = {
    posts: Array<PostType>
    newPostText:string
}

const initialState: InitialStateType = {
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
    ],
    newPostText: 'Напиши пост, не молчи!'
}


export const profileReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newMessage = {
                src: "https://i.ibb.co/CQ80wbD/photo-2021-11-21-21-54-15.jpg",
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newMessage);
            return state;
        case "UPDATE-NEW-POST":
            state.newPostText = action.newPost
            return state;
        default:
            return state;
    }
}
export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost: newPost
    } as const
}
export const updatePostAC = (newPost: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        newPost: newPost
    } as const
}