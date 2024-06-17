/** @jsxImportSource react */
import Header from "./components/Header";   
import Footer from "./components/Footer";
import Background from "./components/Background";
import React from "react";
import ReactDOM from 'react-dom/client';
import './components/Footer.css';
import './components/Header.css';
import './components/Background.css';
import './components/HomePage.css'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Background/>
<Header/>
<Footer/>
</React.StrictMode>
)