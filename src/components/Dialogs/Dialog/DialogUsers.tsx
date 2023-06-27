import React from "react";
import s from "./DialogUsers.module.css"
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string;
    id: number;
}

export const DialogUsers = (props: DialogType) => {
    const {name, id} = props

    const path = "" + id

    return (
        <div className={s.container}>
            <NavLink to={path} className={s.name}>{name}</NavLink>
        </div>
    );
};
