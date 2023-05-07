import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ImageUploadPage from "./components/ImageUploadPage"
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { createGlobalStyle } from 'styled-components';
import { getAuth, onAuthStateChanged } from './firebase';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: whitesmoke;
  }
`

function RouteSwitch() {
  
  const [firebaseUser, setFirebaseUser] = useState({})
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      setFirebaseUser(auth.currentUser);
    }
  });
  

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<App user={firebaseUser} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/upload' element={<ImageUploadPage user={firebaseUser} />} />
        <Route path='/p/:id' element={<ProfilePage user={firebaseUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;