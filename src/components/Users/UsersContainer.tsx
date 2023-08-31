import {connect} from "react-redux";
import {AppStateDataType, UsersType} from "../../App";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducers/users-reducer";
import React from "react";
import axios from "axios";
import {UsersPresentational} from "./UsersPresentational";

export type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type MapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

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

class UsersClassContainerComponent extends React.Component<UsersContainerProps, {}> {

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


        return <UsersPresentational users={this.props.users} totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                                    currentPage={this.props.currentPage} onPageClickHandler={this.onPageClickHandler}
                                    follow={this.props.follow} unfollow={this.props.unfollow}/>;
    }
}

const mapStateToProps = (state: AppStateDataType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount))
    };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainerComponent);
