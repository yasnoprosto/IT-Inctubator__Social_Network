import ReactDOM from "react-dom";
import App, {AppStateDataType} from "./App";

export const rerenderEntireTree = (state: AppStateDataType, addPost:() => void, updateNewPostText:(value: string) => void) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById("root")
    );
}