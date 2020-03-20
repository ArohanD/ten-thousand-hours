import React, { Component, useContext } from 'react';
import AuthContext from '../AuthContext.jsx';
//import { auth } from '../firebase.js'

const Home = (props) => {
    const authState = useContext(AuthContext)
    //auth.onAuthStateChanged((user) => console.log(user))

    return (
        <div>
            <h1>10000 Hours</h1>
            <p></p>
        </div>
    )
}

export default Home;