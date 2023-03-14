import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const IndragramContext = createContext();

export const Indragram = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <IndragramContext.Provider value={{ state, dispatch }}>
        {children}
    </IndragramContext.Provider>
    );
}