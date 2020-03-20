import React, { useState, useEffect } from 'react';
import firebase from '../firebase.js'

const Login = (props) => {

  useEffect(() => {
    firebase.auth().signOut()
  }, [])

  console.log(firebase.auth().currentUser)

  if (firebase.auth().currentUser) {
    // redirect
  }

  const handleLogin = (newUser) => {

    // using dom methods to prevent re-rendering with onChange
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value

    if (newUser) {
      firebase.auth().createUserWithEmailAndPassword(userName, password)
        .then(() => props.history.push('/'))
        .catch((error) => alert(error))
    } else {
      firebase.auth().signInWithEmailAndPassword(userName, password)
        .then(() => props.history.push('/'))
        .catch((error) => alert(error))
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">e-mail</label>
          <input
            id='userName'
            type="text"
            placeholder="example@gmail.com"
            name="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id='password'
            type="password"
            name="password" />
        </div>
        <div>
          <button
            type='button'
            className="login_button"
            onClick={(e) => handleLogin(false)}>Login</button>
          <button
            type='button'
            className="sign_up_button"
            onClick={(e) => handleLogin(true)}>Sign Up</button>
        </div>
      </form>
    </div>
  )

}

export default Login;