import React from "react";
import {UsersType} from "../../App";
import s from "./Users.module.css";


type UsersPropsType = {
    users: UsersType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                userID: "1",
                photoUrl: "https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/master/w_1920,c_limit/Culture-Grumpy-Cat-487386121-2.jpg",
                isFollowed: false,
                fullName: "Denis",
                status: "Working",
                location: {
                    cityName: "Ufa",
                    countryName: "Russia"
                }
            },
            {
                userID: "2",
                photoUrl: "https://cdn.vectorstock.com/i/preview-1x/11/07/cartoon-image-a-gray-cat-face-vector-25821107.webp",
                isFollowed: true,
                fullName: "Ruslan",
                status: "Chilling",
                location: {
                    cityName: "Sochi",
                    countryName: "Russia"
                }
            },
            {
                userID: "3",
                photoUrl: "https://cdn.vectorstock.com/i/preview-1x/93/14/simple-flat-cartoon-of-a-cute-cat-doing-thumbs-up-vector-47709314.webp",
                isFollowed: false,
                fullName: "Elizaveta",
                status: "Vacation",
                location: {
                    cityName: "Moscow",
                    countryName: "Russia"
                }
            },])
    }


    return (
        <div className={s.usersContainer}>
            {props.users.map((u) => {
                console.log(props.users[0].isFollowed);
                return (
                    <div className={s.userContainer} key={u.userID}>
                        <div className={s.imgAndButton}>
                            <div><img className={s.img} src={u.photoUrl}/>{}</div>
                            <div className={s.button}>
                                {u.isFollowed
                                    ? <button onClick={() => props.unfollow(u.userID)}>follow</button>
                                    : <button onClick={() => props.follow(u.userID)}>unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={s.userData}>
                            <div className={s.name}>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>{u.location.cityName}</div>
                                <div>{u.location.countryName}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
