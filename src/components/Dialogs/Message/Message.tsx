import React, {ChangeEvent, MouseEventHandler} from 'react';
import {ActionsType, DialogPageType, MessagesType, UsersType} from "../../../Redux/state";
import s from './Message.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
    dispatch: (action: ActionsType) => void
    state: DialogPageType
}

const Message = (props: MessageType) => {



    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE', newMessageText: props.state.newMessageText})
        props.dispatch({type: "UPDATE-MESSAGE", newMessageText: ''})
    }
    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-MESSAGE", newMessageText: e.currentTarget.value})
    }

    return (
        <div >
            {props.messages.map(m => {
                return (
                    <div key={m.id} className={m.id === 1 ? s.content : s.friendmessage}>
                        <img src={m.img}/>
                        <NavLink to={'/messages/' + m.id}
                                 className={m.id === 1 ? s.users : s.freind}
                        ><div>{m.name}</div></NavLink>
                        <div className={m.id === 1 ? s.message : s.friendMessages}>{m.message}</div>
                    </div>
                )
            })}
            <textarea onChange={onChangeMessage} value={props.state.newMessageText}></textarea>
            <button onClick={addMessage}>send</button>
        </div>


    );
};

export default Message;