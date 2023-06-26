import "./App.css";
import React from "react";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <div className={"header"}>
                <Header/>
            </div>

            <div className={"navigation_content_wrapper"}>
                <Navigation/>
                <div className={"content"}>
                    <Profile/>
                    <Dialogs/>
                </div>
            </div>
                <Footer/>
        </div>
    );
};


export default App;
