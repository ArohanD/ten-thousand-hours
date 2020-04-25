import React, { Component, useState } from 'react';
import AuthContext from '../AuthContext.jsx';
import { auth } from '../firebase.js'

const Home = (props) => {
    const [user, setUser] = useState(null)
    auth.onAuthStateChanged((user) => setUser(user))

    if(!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>10000 Hours</h1>
            <p>Hello {user.displayName},</p>
        </div>
    )
}

export default Home;