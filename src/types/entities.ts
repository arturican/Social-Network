import {addPostAC, updatePostAC} from "../Redux/profileReducer";
import {addMessageAC, updateMessageAC} from "../Redux/dialogsReducer";


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostAC>
    | ReturnType<typeof updateMessageAC>
    | ReturnType<typeof addMessageAC>

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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
    newMessageText: string
}
export type RootType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
export type StoreType = {
    _state: RootType
    updateNewPostText: (newPost: string) => void
    addPost: (newPost: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootType
    dispatch: (action: any) => void

}

