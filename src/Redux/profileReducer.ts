import {ActionsType} from "./state";

export const profileReducer = (state: any , action: ActionsType) => {

    switch (action.type) {
        case "ADD-POST":
            const newMessage = {
                src: "https://i.ibb.co/CQ80wbD/photo-2021-11-21-21-54-15.jpg",
                message: state.newPost,
                likes: 0
            }
            state.profilePage.posts.push(newMessage);
            return state;
        case "UPDATE-NEW-POST":
            state.profilePage.newPostText = state.newPost
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