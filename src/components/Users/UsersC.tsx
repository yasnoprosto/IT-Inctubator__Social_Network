import React from "react";
import s from "./Users.module.css";
import default_avatar from "../default_avatar.webp";
import axios from "axios";
import {UsersType} from "../../App";


type UsersContainerProps = {
    users: UsersType[],
    setUsers: (users: UsersType[]) => void,
    unfollow: (id: string) => void,
    follow: (id: string) => void,

}

export class UsersC extends React.Component<UsersContainerProps, {}> {

    constructor(props: UsersContainerProps) {
        super(props);
        if(this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    this.props.setUsers(res.data.items)
                })
        }
    }


    render() {
        console.log(this.props);

        return (
            <>
                <div className={s.usersContainer}>
                    {this.props.users.map((u) => {
                        return (
                            <div className={s.userContainer} key={u.id}>
                                <div className={s.imgAndButton}>
                                    <div><img className={s.img} src={u.photos.small !== null ? u.photos.small : default_avatar}/>{}</div>
                                    <div className={s.button}>
                                        {u.followed
                                            ? <button onClick={() => this.props.unfollow(u.id)}>follow</button>
                                            : <button onClick={() => this.props.follow(u.id)}>unfollow</button>
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
        )
    }
}