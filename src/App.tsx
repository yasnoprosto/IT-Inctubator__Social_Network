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

type AppPropsType = {
    postsData: PostType[];
    dialogsUsers: DialogType[];
    dialogsMessages: DialogMessagesType[];
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>

            <div className={"app-wrapper"}>
                <div className={"header"}>
                    <Header/>
                </div>

                <div className={"navigation_content_wrapper"}>
                    <Navigation/>
                    <div className={"content"}>
                        <Routes>
                            <Route path={"/profile"} element={<Profile postsData={props.postsData}/>}/>
                            <Route path={"/dialogs"} element={<Dialogs dialogsMessages={props.dialogsMessages} dialogsUsers={props.dialogsUsers}/>}/>
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
