import React from 'react';
import {DialogPageType} from "../../Redux/state";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


type DialogType = {
    state: DialogPageType
}

const Dialogs = (props: DialogType) => {
    return (
        <div>
            <Dialog users={props.state.users}/>
            <Message messages={props.state.messages}/>
        </div>
    );
};

export default Dialogs;