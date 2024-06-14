import React, { useState } from 'react';
import logo from '../assets/Triunvi.png'; // Asegúrate de que la ruta sea correcta
import './Header.css'; // Importa los estilos CSS

const Header = () => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleLoginMenu = () => {
    setShowLoginMenu(!showLoginMenu);
  };

  const handleLogin = () => {
    // Aquí puedes manejar la lógica para autenticar al usuario
    console.log(`Correo: ${email}, Contraseña: ${password}`);
    // Por simplicidad, solo mostraremos los valores en la consola
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <a href="#home" className="navLink alignCenter">Home</a>
        
        <div className="loginContainer">
          <button onClick={toggleLoginMenu} className="loginButton">
            Login
          </button>
          {showLoginMenu && (
            <div className="loginMenu">
              <input
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmailChange}
                className="inputField"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
                className="inputField"
              />
              <button onClick={handleLogin} className="loginSubmitButton">Entrar</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
