import React, {ChangeEvent, KeyboardEvent, RefObject} from "react";
import s from "./MyPosts.module.css";

type MyPostsPropsType = {
    mappedPosts: JSX.Element[]
    newPostText: string
    addPostCallback: () => void
    onKeyUpCallback: (e: KeyboardEvent<HTMLTextAreaElement>) => void
    onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
    inputRef: RefObject<HTMLTextAreaElement>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        return (
            <div className={s.container}>
                <textarea onKeyUp={(e) => props.onKeyUpCallback(e)}
                          onChange={(e) => props.onChangeCallback(e)}
                          className={s.textarea}
                          value={props.newPostText}/>
                <button onClick={props.addPostCallback} className={s.addPostButton}>Add post
                </button>
                <div className={s.posts}>
                    {props.mappedPosts}
                </div>
            </div>
        );
    }
;