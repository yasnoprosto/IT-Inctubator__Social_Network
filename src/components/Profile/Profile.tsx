import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post";

type ProfilePropsType = {
    profileData: ProfileDataType
}

type ProfileDataType = {
    postsData: PostType[];
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPosts postsData={props.profileData.postsData}/>
        </div>
    );
};
