import "./App.css";
import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {PostType} from "./components/Profile/MyPosts/Post";
import {DialogType} from "./components/Dialogs/Dialog/DialogUsers";
import {DialogMessagesType} from "./components/Dialogs/Dialog/DialogMessages";
import {FriendsListDataType} from "./components/Navigation/Sidebar/Sidebar";

export type AppStateType = {
    state: AppStateDataType
    addPost: () => void
    updateNewPostText: (value: string) => void
    addMessage: () => void
    updateNewMessageText: (value: string) => void
}


export type AppStateDataType = {
    profileData: ProfileDataType
    dialogsData: DialogsDataType
    sidebarData: SidebarDataType
}

export type ProfileDataType = {
    postsData: PostType[]
    newPostText: string
}

export type DialogsDataType = {
    dialogsUsers: DialogType[]
    dialogsMessages: DialogMessagesType[]
    newMessageText: string
}

export type SidebarDataType = {
    friendsListData: FriendsListDataType[]
}


const App: React.FC<AppStateType> = (props) => {
    return (
        <BrowserRouter>

            <div className={"app-wrapper"}>
                <div className={"header"}>
                    <Header/>
                </div>

                <div className={"navigation_content_wrapper"}>
                    <Navigation sidebarData={props.state.sidebarData}/>
                    <div className={"content"}>
                        <Routes>
                            <Route path={"/profile"}
                                   element={<Profile profileData={props.state.profileData} addPost={props.addPost}
                                                     updateNewPostText={props.updateNewPostText}/>}/>
                            <Route path={"/dialogs"}
                                   element={<Dialogs dialogsData={props.state.dialogsData} addMessage={props.addMessage}
                                                     updateNewMessageText={props.updateNewMessageText}/>}/>
                            <Route path={"/news"} element={<News/>}/>
                            <Route path={"/music"} element={<Music/>}/>
                            <Route path={"/settings"} element={<Settings/>}/>
                        </Routes>

                    </div>
                </div>
                <Footer/>
            </div>

        </BrowserRouter>
    );
};


export default App;
