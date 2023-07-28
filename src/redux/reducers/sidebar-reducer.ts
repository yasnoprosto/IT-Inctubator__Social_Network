import {SidebarDataType} from "../../App";
import {v1} from "uuid";
import avatar from "../../components/avatar_sidebar.png";

const initialState = {
    friendsListData: [
        {
            id: v1(),
            avatar: avatar,
            name: "Oleg"
        },
        {
            id: v1(),
            avatar: avatar,
            name: "Mike"
        },
        {
            id: v1(),
            avatar: avatar,
            name: "Stas"
        },
    ]
};

export const sidebarReducer = (state: SidebarDataType = initialState, action: any) => {

    return state
}