import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";



export const renderTree = (): void => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>,
        document.getElementById("root")
    );
};

renderTree();


subscribe(renderTree);