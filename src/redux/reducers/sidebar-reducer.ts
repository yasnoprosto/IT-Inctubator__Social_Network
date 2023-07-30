import {SidebarPageDataType} from "../../App";
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

export const sidebarReducer = (state: SidebarPageDataType = initialState, action: any): SidebarPageDataType => {

    return state
}