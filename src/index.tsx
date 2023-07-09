import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {PostType} from "./components/Profile/MyPosts/Post";
import {v1} from "uuid";
import {DialogType} from "./components/Dialogs/Dialog/DialogUsers";
import {DialogMessagesType} from "./components/Dialogs/Dialog/DialogMessages";
import {state} from "./redux/state";


ReactDOM.render(
    <App state={state}/>,
    document.getElementById("root")
);