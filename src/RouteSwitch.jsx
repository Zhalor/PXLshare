import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import ImageUploadPage from "./components/ImageUploadPage"
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { createGlobalStyle } from 'styled-components';
import { getAuth, onAuthStateChanged } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import Lato from './fonts/Lato.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Lato';
    src: url(${Lato});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

  body {
    background-color: whitesmoke;
  }
`
const UserContext = createContext();

function RouteSwitch() {
  
  const [firebaseUser, setFirebaseUser] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setFirebaseUser(auth.currentUser);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={firebaseUser}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>     
        <Route path='/' element={isLoggedIn ? <App /> : <Navigate to='/login' />} />
        <Route path='/upload' element={<ImageUploadPage />} />
        <Route path='/p/:id' element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export { RouteSwitch, UserContext };