import {v1} from "uuid";
import {UsersPageDataType, UsersType} from "../../App";


const initialState: UsersPageDataType = {
    users: [
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
        },
    ]
};

export const usersReducer = (state: UsersPageDataType = initialState, action: AllUsersActionsType): UsersPageDataType => {
    debugger
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => {
                    if (u.userID === action.userID) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })
            }
        }
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => {
                    if (u.userID === action.userID) {
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
type AllUsersActionsType = followActionType | unfollowActionType | setUsersActionType

export type followActionType= ReturnType<typeof followAC>

export const followAC = (userID: string) => {
    debugger
    return {type: "FOLLOW", userID} as const;
};

export type unfollowActionType= ReturnType<typeof unfollowAC>

export const unfollowAC = (userID: string) => {
    debugger
    return { type: "UNFOLLOW", userID} as const;
};

export type setUsersActionType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UsersType[]) => {
    return {type: "SET-USERS", users} as const;
};