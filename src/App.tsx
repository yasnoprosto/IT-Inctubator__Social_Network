import "./App.css";
import React from "react";
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";
import {Profile} from "./components/Profile";
import {Header} from "./components/Header";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <Header />
            <Navigation />
            <Profile />
            <Footer />
        </div>
    );
};


export default App;
