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
                    <div key={m.id} className={m.id === 1 ? s.content : s.friendmessage}><div>{m.message}</div></div>
                )
            })}
            <textarea>LOL</textarea>
            <button>send</button>
        </div>

    );
};

export default Message;