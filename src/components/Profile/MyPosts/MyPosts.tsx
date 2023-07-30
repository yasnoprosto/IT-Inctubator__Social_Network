import React from "react";
import s from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {store} from "../../../redux/redux-store";

// type MyPostsPropsType = {
//     mappedPosts: JSX.Element[]
//     newPostText: string
//     addPostCallback: () => void
//     onKeyUpCallback: (e: KeyboardEvent<HTMLTextAreaElement>) => void
//     onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
//     inputRef: RefObject<HTMLTextAreaElement>
// }

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        return (
            <div className={s.container}>
                <textarea onKeyUp={(e) => props.onKeyUpHandler(e, store.getState())}
                          onChange={(e) => props.onChangeHandler(e)}
                          className={s.textarea}
                          value={props.newPostText}/>
                <button onClick={() => props.addPost(store.getState())} className={s.addPostButton}>Add post
                </button>
                <div className={s.posts}>
                    {props.mappedPostsData}
                </div>
            </div>
        );
    }
;