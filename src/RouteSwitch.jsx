import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ImageUploadPage from "./components/ImageUploadPage"

function RouteSwitch() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/upload' element={<ImageUploadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;