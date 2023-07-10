import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post";
import {ProfileDataType} from "../../App";

type ProfilePropsType = {
    profileData: ProfileDataType
    addPost:(postText: string) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPosts postsData={props.profileData.postsData} addPost={props.addPost}/>
        </div>
    );
};
