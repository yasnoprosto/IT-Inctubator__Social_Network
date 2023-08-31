import React from "react";
import s from "./Users.module.css";
import default_avatar from "../default_avatar.webp";
import axios from "axios";
import {UsersType} from "../../App";
import {MouseEvent} from "react";


type UsersContainerProps = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    unfollow: (id: string) => void
    follow: (id: string) => void
}

export class UsersC extends React.Component<UsersContainerProps, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    onPageClickHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    };


    render() {
        console.log(this.props);
        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let currentPage = this.props.currentPage;
        let currentPF = ((currentPage - 5) < 0) ?  0  : currentPage - 5 ;
        let currentPL = currentPage + 5;
        let slicedPages = pages.slice( currentPF, currentPL);
        ;

        return (
            <>
                <div>
                    {slicedPages.map(p => {
                    return (
                    <span onClick={() => this.onPageClickHandler(p)}
                          className={p === this.props.currentPage ? s.selectedPage : s.page}>{p} </span>
                    )
                    })}
                </div>
                <div className={s.usersContainer}>
                    {this.props.users.map((u) => {
                        return (
                            <div className={s.userContainer} key={u.id}>
                                <div className={s.imgAndButton}>
                                    <div><img className={s.img}
                                              src={u.photos.small !== null ? u.photos.small : default_avatar}/>{}</div>
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
        );
    }
}