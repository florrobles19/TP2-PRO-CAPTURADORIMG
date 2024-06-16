/** @jsxImportSource react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Background from './components/Background.jsx';
import Footer from './components/Footer.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import './assets/fonts/fonts.css';
import './components/HomePage.css';
import './components/Footer.css';
import './components/RegistrationForm.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RegistrationForm />
    <Background />
    <Footer />
  </React.StrictMode>
);
