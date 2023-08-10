import React, {ChangeEvent} from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateDataType, UsersPageDataType, UsersType} from "../../App";
import {Dispatch} from "redux";
import {PostType} from "../Profile/MyPosts/Post";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";

export type MapStateToPropsType = {
    users: UsersType[]
}

export type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateDataType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    debugger
    return {
        follow: (userID: string) => {
            debugger
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            debugger
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users))
    };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
