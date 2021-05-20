// Importing functions necessary to create and use a context component
import React, { useReducer, createContext, useCallback } from 'react';

// Create a context component
const UserContext = createContext();

// Declare an initial state for the context component (the global state, initially)
const initialState = {
    userName: undefined,
    jsonwebtoken: undefined,
    loggedIn: false,
    avatar: undefined
}