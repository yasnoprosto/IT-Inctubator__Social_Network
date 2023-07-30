import React from "react";
import s from "../Sidebar/Sidebar.module.css"
import avatar from "../../avatar_sidebar.png"
import {SidebarPageDataType} from "../../../App";
import {NavLink} from "react-router-dom";

type SidebarPropsType = {
    sidebarData: SidebarPageDataType
}

export type FriendsListDataType = {
    id: string
    avatar: string
    name: string
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    const mappedFriendsList = props.sidebarData.friendsListData.map((f, i) => {
        const path = "" + f.id
        return (
            <div className={s.friendContainer} key={i}>
                <div className={s.avatar}><NavLink to={path}><img src={f.avatar}/></NavLink></div>
                <div className={s.name}><NavLink to={path}>{f.name}</NavLink></div>
            </div>
        )
    });
    return (
        <div className={s.sidebar}>
            <div className={s.sidebarTitle}>Friends</div>
            <div className={s.friendsList}>
                {mappedFriendsList}
            </div>
        </div>
    );
};
