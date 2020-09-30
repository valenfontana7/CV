import React from "react";
import header from "./css/Header.module.css";

const Header = () => {
  return (
    <div className={header.page}>
      <nav className={header.navigation}>
        <a href="/">Inicio</a>
        <span>|</span>
        <a href="/about">Acerca de</a>
        <span>|</span>
        <a href="/skills">Habilidades</a>
        <span>|</span>
        <a href="/exp">Experiencia</a>
      </nav>
    </div>
  );
};

export default Header;
