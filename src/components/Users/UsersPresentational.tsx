import React from "react";
import s from "./Users.module.css";
import default_avatar from "../default_avatar.webp";
import {UsersType} from "../../App";

type UsersPresentationalPropsType = {
    users: UsersType[]
    totalUserCount: number
    pageSize: number
    onPageClickHandler: (p: number) => void
    currentPage: number
    follow: (id: string) => void
    unfollow: (id: string) => void
};


export const UsersPresentational: React.FC<UsersPresentationalPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const currentPage = props.currentPage;
    const currentPF = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    const currentPL = currentPage + 5;
    const slicedPages = pages.slice(currentPF, currentPL);


    return (
        <>
            <div>
                {slicedPages.map(p => {
                    return (
                        <span onClick={() => props.onPageClickHandler(p)}
                              className={p === props.currentPage ? s.selectedPage : s.page}>{p} </span>
                    );
                })}
            </div>
            <div className={s.usersContainer}>
                {props.users.map((u) => {
                    return (
                        <div className={s.userContainer} key={u.id}>
                            <div className={s.imgAndButton}>
                                <div><img className={s.img}
                                          src={u.photos.small !== null ? u.photos.small : default_avatar}/>{}</div>
                                <div className={s.button}>
                                    {u.followed
                                        ? <button onClick={() => props.unfollow(u.id)}>follow</button>
                                        : <button onClick={() => props.follow(u.id)}>unfollow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.userData}>
                                <div className={s.name}>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div className={s.location}>
                                    <div>{"u.location.cityName"}</div>
                                    <div>{"u.location.countryName"}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
