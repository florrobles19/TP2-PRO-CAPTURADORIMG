/** @jsxImportSource react */
import React from 'react';
import './Background.css'; // Importa el archivo CSS

const Background = ({ children }) => (
  <div className="background">
    {children}
  </div>
);

export default Background;
