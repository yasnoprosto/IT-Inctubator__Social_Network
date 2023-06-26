import React from "react";
import slideshare from "../slideshare.png"
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div className={s.header}>

            <img
                className={s.logo}
                src={slideshare}
                alt=""/>
        </div>
    );
};
