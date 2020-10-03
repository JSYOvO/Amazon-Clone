import React, {createContext, useContext, useReducer} from 'react'

// Prepare the Datalayer
export const StateContext = createContext();

// Wrap out app and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState, )}>
        {children}
    </StateContext.Provider>
);

// Pull infomation from the data layer
export const useStateValue = () => useContext(StateContext);
