// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import Background from './components/Background.jsx';
import './assets/fonts/fonts.css';
import './components/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ImageUploader />
    <Background />
  </React.StrictMode>
);
