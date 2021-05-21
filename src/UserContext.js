// Importing functions necessary to create and use a context component
import React, { useReducer, createContext, useCallback } from 'react';

// Create a context component
export const UserContext = createContext();

// Declare actions for this component
// This is the actual action that we're going to do. In this case, we want to login. It could also be 
// duplicating cart, deleting user, etc etc
const UPDATE_USER = "UPDATE_USER";

// Declare an initial state for the context component (the global state, initially)
const initialState = {
    userName: localStorage.getItem('userName') || undefined,
    jsonwebtoken: localStorage.getItem('jsonwebtoken') || undefined,
    loggedIn: localStorage.getItem('userName') || false,
    email: localStorage.getItem('email') || undefined,
    avatar: localStorage.getItem('avatar') || undefined,
    productsArray: localStorage.getItem('productsArray') || undefined
}

// This function is responsible for changing the global state (it's what changes the ticker at the airport)
// Reducer will take the payload information and use it to change the global state, so that all other components
// can see the new global state too
const reducer = (state=false, action) => {
    if(action.type === UPDATE_USER) {
        return {
            ...state,
            ...action.payload
        }
    }
}


// This is the provider component. The provider is the events queue, or which provides the global state to everyone.
// The consumer is which watches the provider. Not all components are subscribed to the queue; only those which are
// are called consumers

// Here, we're exporting the circle, or events queue. The provider has functions and reducers. If you want to
// change global state, you'll have this function that the publisher must use to make an announcement. In our case,
// the publisher needs the functions provided by the provider in order to change the global state, which is the
// function updateUser() [THE PUBLISHER SETS THE CHAIN REACTION]
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state: ', state);
  
    // Declare functions to send payload to reducer
    const updateUser = useCallback(
        (payload) => {
            // Set the values in the user's computer
            localStorage.setItem('userName', payload.userName);
            localStorage.setItem('email', payload.email);
            localStorage.setItem('avatar', payload.avatar);
            localStorage.setItem('jsonwebtoken', payload.jsonwebtoken);
            localStorage.setItem('productsArray', JSON.stringify(payload.productsArray));
            console.log('productsArray is: ', JSON.stringify(payload.productsArray));

            dispatch(
                {
                    type: UPDATE_USER,
                    payload: payload
                }
            )
        }, [dispatch]
    );

    return(
        // The provider is providing the global states, as well as a function to update the states (above updateUser)
        <UserContext.Provider 
            value={{
                userName: state.userName,
                jsonwebtoken: state.jsonwebtoken,
                loggedIn: state.loggedIn,
                avatar: state.avatar,
                email: state.email,
                productsArray: state.productsArray,
                updateUser
            }}
        >{children}
        </UserContext.Provider>
    )
};