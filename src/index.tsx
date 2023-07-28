import ReactDOM from "react-dom";
import App, {AppStateDataType} from "./App";
import {store} from "./redux/store";


export const renderTree = (state: AppStateDataType): void => {
    ReactDOM.render(
        <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById("root")
    );
};

renderTree(store.getState());


store.subscribe(() => {
    const state = store.getState()
    renderTree(state)
});