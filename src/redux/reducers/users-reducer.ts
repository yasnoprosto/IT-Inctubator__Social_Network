import {UsersPageDataType, UsersType} from "../../App";


const initialState: UsersPageDataType = {
    users: [],
    pageSize: 10,
    totalCount: 21,
    currentPage: 1,
};

export const usersReducer = (state: UsersPageDataType = initialState, action: AllUsersActionsType): UsersPageDataType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.totalCount}
        default:
            return state;
    }
};
type AllUsersActionsType = followActionType | unfollowActionType | setUsersActionType | setCurrentPageType | setTotalUsersCountType

export type followActionType= ReturnType<typeof followAC>

export const followAC = (userID: string) => {
    return {type: "FOLLOW", userID} as const;
};

export type unfollowActionType= ReturnType<typeof unfollowAC>

export const unfollowAC = (userID: string) => {
    return { type: "UNFOLLOW", userID} as const;
};

export type setUsersActionType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UsersType[]) => {
    return {type: "SET-USERS", users} as const;
};

export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>

export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const;
};

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: "SET-TOTAL-USERS-COUNT", totalCount} as const;
};