import React, { createContext, useContext, userReducer } from 'react';
import { useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialstate, children }) => (
    <StateContext.Provider value = { useReducer ( reducer, initialstate)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext ( StateContext);