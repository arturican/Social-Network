import React from 'react';
import {MessagesType} from "../../../Redux/state";
import s from './Message.module.css'

type MessageType = {
    messages: Array<MessagesType>
}

const Message = (props: MessageType) => {
    return (
        <div >
            {props.messages.map(m => {
                return (
                    <div key={m.id} className={s.content}><span>{m.message}</span></div>
                )
            })}
        </div>
    );
};

export default Message;