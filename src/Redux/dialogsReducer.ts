import {ActionsType} from "../types/entities";

let initalState = {
    users: [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Dilyara'},
    ],
    messages: [
        {
            id: 1,
            message: 'Hi, Dilyara!',
            name: 'Artur',
            img: 'https://lh3.googleusercontent.com/-E65lnxcLZ0c/AAAAAAAAAAI/AAAAAAAAAAA/APmPUbE0IrJSL-ECAqp4sVteYG-JudFuLg/photo.jpg?sz=200'
        },
        {
            id: 2,
            message: 'Hi, Artur!',
            name: 'Dilyara',
            img: 'https://cdn4.telegram-cdn.org/file/JzgWrSGqjMQKidX3UVVu59zNguNCAU8Iv53XMgGfP489S0EDaLNmRQXY7JZSgiwxIWYM8ej4Z870bE43CIP414-Dkf_UC4FI8VCIU6aRiuLy8z4wTtheaaDQw_Zn13Jg-3YIdNrZCo5fkuZo1zXZ9zwkL7DC9rQ3l7WEd2O5nJpW0iJOU9egNcb3mCl_96HnIgXMgdjeI459AgyZoCfqJ3amBh5X9TmgMft64alJvJPQdrNV9RtKYsUhw_yEI4byU4ReIzom-oXUIWgTPtA4JA2sOPO4sdPk_UkgkyijLVFW5Y_H1r4zcg3Jc09nBJ8taLhm7_c85gJ1QftkT9J7kw.jpg'
        }
    ],
    newMessageText: 'Напиши сообщение'
}
export const dialogsReducer = (state= initalState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: 1,
                message: state.newMessageText,
                name: 'Artur',
                img: 'https://lh3.googleusercontent.com/-E65lnxcLZ0c/AAAAAAAAAAI/AAAAAAAAAAA/APmPUbE0IrJSL-ECAqp4sVteYG-JudFuLg/photo.jpg?sz=200'
            }
            state.messages.push(newMessage);
            return state;
        case 'UPDATE-MESSAGE':
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export const updateMessageAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        newMessageText: newMessageText
    } as const

}

export const addMessageAC = (newMessageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessageText: newMessageText
    } as const
}