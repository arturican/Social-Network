import React from 'react';
import {UsersType} from "../../../Redux/state";
import {NavLink} from "react-router-dom";


type DialogType = {
    users: Array<UsersType>
}

const Dialog = (props: DialogType) => {
    return (
        <div>
            {props.users.map(u => {
                return (
                    <NavLink to={'/messages/' + u.id}>{u.name}</NavLink>
                )
            })}</div>
    );
}
export default Dialog;