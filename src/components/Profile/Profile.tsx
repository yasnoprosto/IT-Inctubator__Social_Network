import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDataType} from "../../App";
import {ActionsType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};
