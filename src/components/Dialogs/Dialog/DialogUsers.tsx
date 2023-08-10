import React from "react";
import s from "./DialogUsers.module.css"
import {NavLink} from "react-router-dom";

export type DialogType = {
    userName: string;
    userID: string;
}

export const DialogUsers = (props: DialogType) => {
    const {userName, userID} = props

    const path = "" + userID

    return (
        <div className={s.container}>
            <NavLink to={path} className={s.name}>{userName}</NavLink>
        </div>
    );
};
