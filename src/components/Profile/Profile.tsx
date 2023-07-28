import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileDataType} from "../../App";
import {ActionsType} from "../../redux/store";

type ProfilePropsType = {
    profileData: ProfileDataType
    dispatch: (action: ActionsType) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPosts profileData={props.profileData} dispatch={props.dispatch}/>
        </div>
    );
};
