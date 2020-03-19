import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router.jsx';

import AuthContext from './AuthContext.jsx'

const App = () => {
  return (
    <AuthContext.Provider value={{ name: 'test' }}>
      <Root />
    </AuthContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));