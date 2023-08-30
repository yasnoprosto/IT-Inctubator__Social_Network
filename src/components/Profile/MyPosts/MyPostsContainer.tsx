import {ChangeEvent} from "react";
import {PostType} from "./Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateDataType} from "../../../App";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    newPostText: string
    postsData: PostType[]
}

type MapDispatchToPropsType = {
    addPost: () => void
    onKeyUpHandler: () => void
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


const mapStateToProps = (state: AppStateDataType): MapStateToPropsType => {
    return {
        newPostText: state.profileData.newPostText,
        postsData: state.profileData.postsData,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        onKeyUpHandler: () => {
            dispatch(addPostAC());
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextAC(e.currentTarget.value));
        },
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);