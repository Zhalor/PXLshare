import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ImageUploadPage from "./components/ImageUploadPage"
import ProfilePage from './components/ProfilePage';

function RouteSwitch() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/upload' element={<ImageUploadPage />} />
        <Route path='/p/testUser' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;