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

            <div className={s.message}>
                <Message messages={props.state.messages}
                         users = {props.state.users}/>
            </div>
        </div>
    );
};

export default Dialogs;