import {v1} from "uuid";
import {UsersPageDataType, UsersType} from "../../App";


const initialState: UsersPageDataType = {
    users: []
};

export const usersReducer = (state: UsersPageDataType = initialState, action: any): UsersPageDataType => {
    debugger
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => {
                    if (u.userID === action.id) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })
            }
        }
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => {
                    if (u.userID === action.id) {
                        return {...u, isFollowed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {...state, users: state.users, ...action.users}
        default:
            return state;
    }
};

export type followActionType= ReturnType<typeof followAC>

export const followAC = (userID: string) => {
    debugger
    return {type: "FOLLOW", userID};
};

export type unfollowActionType= ReturnType<typeof unfollowAC>

export const unfollowAC = (userID: string) => {
    debugger
    return { type: "UNFOLLOW", userID};
};

export type setUsersActionType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UsersType[]) => {
    return {type: "SET-USERS", users};
};