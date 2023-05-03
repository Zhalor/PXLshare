import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ImageUploadPage from "./components/ImageUploadPage"
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { createGlobalStyle } from 'styled-components';
import { getAuth } from 'firebase/auth';

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

  const auth = getAuth();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/upload' element={<ImageUploadPage />} />
        <Route path='/p/:id' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;