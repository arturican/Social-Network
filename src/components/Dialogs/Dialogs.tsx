import React from 'react';
import {ActionsType, DialogPageType} from "../../Redux/store";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"


type DialogType = {
    state: DialogPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogType) => {



    return (
        <div className={s.container}>

            <div className={s.message}>
                <Message messages={props.state.messages}
                         users = {props.state.users}
                         dispatch={props.dispatch.bind(props.dispatch)}
                         state = {props.state}
                />
            </div>
        </div>
    );
};

export default Dialogs;