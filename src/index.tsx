import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/state";



export const renderTree = (): void => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>,
        document.getElementById("root")
    );
};

renderTree();


store.subscribe(renderTree);