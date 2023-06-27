import React from "react";
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={s.navigation}>
                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link}  to="/profile">Profile</NavLink>
                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link} to="/dialogs">Messages</NavLink>
                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link} to="/news">News</NavLink>
                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link} to="/music">Music</NavLink>
                <NavLink className={({isActive}) => isActive ? s.linkActive : s.link} to="/settings">Settings</NavLink>
        </div>
    );
};