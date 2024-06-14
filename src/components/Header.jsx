// src/components/Header.jsx
import React from 'react';
import logo from '../assets/Triunvi.png'; // Asegúrate de que la ruta sea correcta

const Header = () => (
  <header style={styles.header}>
    <img src={logo} alt="Logo" style={styles.logo} />
    <nav style={styles.nav}>
      <a href="#home" style={styles.navLink}>Home</a>
      <a href="#about" style={styles.navLink}>About</a>
      <a href="#contact" style={styles.navLink}>login</a>
    </nav>
  </header>
);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',

    color: 'white',
  },
  logo: {
    height: '80px',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Header;
