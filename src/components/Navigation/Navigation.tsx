import React from "react";
import s from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <div className={s.item}><a href="/profile">Profile</a></div>
            <div className={s.item}><a href="/messages">Messages</a></div>
            <div className={s.item}><a href="/news">News</a></div>
            <div className={s.item}><a href="/music">Music</a></div>
            <div className={s.item}><a href="/settings">Settings</a></div>
        </div>
    );
};