import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google'

import Login from './components/Login'
import Home from './container/Home'

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
