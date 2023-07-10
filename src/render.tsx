import ReactDOM from "react-dom";
import App, {AppStateDataType} from "./App";
import React from "react";

export const rerenderEntireTree = (state: AppStateDataType, addPost:(postText: string) => void) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById("root")
    );
}