import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDataType} from "../../App";

type ProfilePropsType = {
    profileData: ProfileDataType
    addPost: () => void
    updateNewPostText: (value: string) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPosts profileData={props.profileData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};
