import React, {Context} from "react";
import {StoreType} from "./redux/store";

export const StoreContext: Context<StoreType> = React.createContext({} as StoreType)

type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}
