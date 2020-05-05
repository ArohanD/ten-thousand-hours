import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router.jsx';
import './AppStyle.css'

import AuthContext from './AuthContext.jsx'

const guestState = {
  id: null,
  email: null
}

const App = () => {
  
  return (
    <AuthContext.Provider value={guestState}>
      <Root />
    </AuthContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));