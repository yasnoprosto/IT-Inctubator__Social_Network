import "./App.css";
import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {PostType} from "./components/Profile/MyPosts/Post";
import {DialogType} from "./components/Dialogs/Dialog/DialogUsers";
import {DialogMessagesType} from "./components/Dialogs/Dialog/DialogMessages";
import {FriendsListDataType} from "./components/Navigation/Sidebar/Sidebar";
import {store} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export type AppStateDataType = {
    profileData: ProfilePageDataType
    dialogsData: DialogsPageDataType
    sidebarData: SidebarPageDataType
    usersPage: UsersPageDataType
}

export type ProfilePageDataType = {
    postsData: PostType[]
    newPostText: string
}

export type DialogsPageDataType = {
    dialogsUsers: DialogType[]
    dialogsMessages: DialogMessagesType[]
    newMessageText: string
}

export type UsersPageDataType = {
    users: UsersType[]
};

export type UsersType = {
    userID: string
    photoUrl: string
    isFollowed: boolean
    fullName: string
    status: string
    location: UsersLocationType
};

type UsersLocationType = {
        cityName: string
        countryName: string
    };


export type SidebarPageDataType = {
    friendsListData: FriendsListDataType[]
}


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <div className={"header"}>
                <Header/>
            </div>

            <div className={"navigation_content_wrapper"}>
                <Navigation sidebarData={store.getState().sidebarData}/>
                <div className={"content"}>
                    <Routes>
                        <Route path={"/profile"}
                               element={<Profile/>}/>
                        <Route path={"/dialogs"}
                               element={<DialogsContainer/>}/>
                        <Route path={"/users"}
                               element={<UsersContainer/>}/>
                        <Route path={"/news"} element={<News/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/settings"} element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
            <Footer/>
        </div>
    );
};


export default App;
