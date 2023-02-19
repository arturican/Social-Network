import React from 'react';
import {MessagesType, UsersType} from "../../../Redux/state";
import s from './Message.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
}

const Message = (props: MessageType) => {
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
            <textarea>LOL</textarea>
            <button>send</button>
        </div>


    );
};

export default Message;