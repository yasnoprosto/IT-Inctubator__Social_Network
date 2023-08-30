import React from "react";
import {UsersType} from "../../App";
import s from "./Users.module.css";
import axios from "axios"
import default_avatar from "./../default_avatar.webp"


type UsersPropsType = {
    users: UsersType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {
debugger

    const getUsers = () => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                props.setUsers(res.data.items)
            })
    }
    }


    return (
        <>
        <button onClick={getUsers}>Get Users</button>
        <div className={s.usersContainer}>
            {props.users.map((u) => {
                return (
                    <div className={s.userContainer} key={u.id}>
                        <div className={s.imgAndButton}>
                            <div><img className={s.img} src={u.photos.small !== null ? u.photos.small : default_avatar}/>{}</div>
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
