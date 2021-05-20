import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// Notice that this component is only connected to the global state, no local state
// Initially, the state has empty values
// If we change any of the values or log in, we'll see it in the components
function ProfileScreen() {

    const { userName, email, avatar, updateUser } = useContext(UserContext);

    return(
        <div className="container">
            <h1>My Profile</h1>
            <div>
                <ul>
                    <li>{userName}</li>
                    <li>{email}</li>
                    <li>{avatar}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileScreen;