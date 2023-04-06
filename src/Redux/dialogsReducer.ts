import {ActionsType, RootType} from "./state";

export const dialogsReducer = (state: any, action: ActionsType) => {

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