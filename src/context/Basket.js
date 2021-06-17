//  setup date layer
// we need this to track the basket
import React, { createContext, useContext, useReducer } from "react"

// this is the data layer (created context)
export const StateContext = createContext()

// building the provider for the context
export const StateProvider = (props) => {
    const { reducer, initialState, children } = props;

    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

}

const useStateValue = () => (useContext(StateContext))

export default useStateValue;