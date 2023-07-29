import "./App.css";
import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {PostType} from "./components/Profile/MyPosts/Post";
import {DialogType} from "./components/Dialogs/Dialog/DialogUsers";
import {DialogMessagesType} from "./components/Dialogs/Dialog/DialogMessages";
import {FriendsListDataType} from "./components/Navigation/Sidebar/Sidebar";
import {ActionsType, StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



export type AppStoreDataType = {
    state: AppStateDataType
    store: StoreType
    dispatch: (action: ActionsType) => void
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


const App: React.FC<AppStoreDataType> = (props) => {
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
                                   element={<Profile store={props.store}/>}/>
                            <Route path={"/dialogs"}
                                   element={<DialogsContainer store={props.store}/>}/>
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
