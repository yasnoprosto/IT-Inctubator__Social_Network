import ReactDOM from "react-dom";
import App, {AppStateDataType} from "./App";
import {store} from "./redux/store";
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";


export const renderTree = (state: AppStateDataType): void => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </Provider></BrowserRouter>,
        document.getElementById("root")
    );
};

renderTree(store.getState());


store.subscribe(() => {
    const state = store.getState()
    renderTree(state)
});