import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/state";


export const renderTree = (): void => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById("root")
    );
};

renderTree();


store.subscribe(renderTree);