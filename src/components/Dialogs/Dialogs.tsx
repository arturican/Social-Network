import React from 'react';
import {DialogPageType} from "../../Redux/state";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"


type DialogType = {
    state: DialogPageType
}

const Dialogs = (props: DialogType) => {
    return (
        <div className={s.container}>
            <div className={s.users}>
                <Dialog users={props.state.users}/>
            </div>
            <div className={s.message}>
                <Message messages={props.state.messages}/>
            </div>
        </div>
    );
};

export default Dialogs;