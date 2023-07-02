import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post";

type ProfilePropsType = {
    postsData: PostType[];
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};
