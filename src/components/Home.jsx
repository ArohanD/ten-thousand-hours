import React, { Component, useContext } from 'react';
import AuthContext from '../AuthContext.jsx';

const Home = (props) => {
    const authState = useContext(AuthContext)
    console.log(authState.id)

    return (
        <div>
            <h1>10000 Hours</h1>
            <p></p>
        </div>
    )
}

export default Home;