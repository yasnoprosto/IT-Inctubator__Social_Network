import React, {ChangeEvent, KeyboardEvent, useRef} from "react";
import {Post} from "./Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerPropsType = {}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);

        return (
            <div>
                <StoreContext.Consumer>{
                    (store) => {
                        const state = store.getState().profileData

                        const mappedPostsData = state.postsData.map((p, i) => {
                            return (
                                <Post key={i} postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
                            );
                        });


                        const addPost = () => {
                            debugger
                            if(state.newPostText.trim()) {
                                store.dispatch(addPostAC());
                            }
                        };

                        const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                            if(e.key === "Enter") {
                                if(state.newPostText.trim()) {
                                    store.dispatch(addPostAC());
                                }
                            }
                        }

                        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                            store.dispatch(updateNewPostTextAC(e.currentTarget.value));
                        };
                        return (
                        <MyPosts mappedPosts={mappedPostsData} inputRef={inputRef} newPostText={state.newPostText}
                                 addPostCallback={addPost} onKeyUpCallback={onKeyUpHandler}
                                 onChangeCallback={onChangeHandler}/>
                            )
                    }
                }</StoreContext.Consumer>
            </div>
        );
    }
;