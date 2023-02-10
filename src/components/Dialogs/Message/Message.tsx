import React from 'react';
import {MessagesType} from "../../../Redux/state";


type MessageType = {
    messages: Array<MessagesType>
}

const Message = (props: MessageType) => {
    return (
        <div>
            {props.messages.map(m => {
                return (
                    <div key={m.id}>{m.message}</div>
                )
            })}
        </div>
    );
};

export default Message;