import React from "react";
import s from "./DialogUsers.module.css"
import {NavLink} from "react-router-dom";

export type DialogType = {
    userName: string;
    userId: string;
}

export const DialogUsers = (props: DialogType) => {
    const {userName, userId} = props

    const path = "" + userId

    return (
        <div className={s.container}>
            <NavLink to={path} className={s.name}>{userName}</NavLink>
        </div>
    );
};
