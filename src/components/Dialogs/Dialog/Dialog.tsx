import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Dialog.module.css'
import {UsersType} from "../../../types/entities";

type DialogType = {
    users: Array<UsersType>
}

const Dialog = (props: DialogType) => {
    return (
        <div>
            {props.users.map(u => {
                return (
                    <NavLink to={'/messages/' + u.id}
                             className={u.id === 1 ? s.users : s.freind}
                    ><div>{u.name}</div></NavLink>
                )
            })}</div>
    );
}
export default Dialog;