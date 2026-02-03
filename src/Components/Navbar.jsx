import React from "react";
import { Link } from "react-router-dom";
import '../css/mobile_hamburger.css';
import { useTranslation } from 'react-i18next';


const NavbarFront = () => {
  const {t} = useTranslation()

  return (
    <nav className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li><Link to="/">Oslo&nabo</Link></li>
        <li><Link to="/wskazowki">{t("wskazowki")}</Link></li>
        <li><Link to="/miejsca">{t("miejsca")}</Link></li>
        <li><a href="https://ruter.no/" target="_blank" rel="noopener noreferrer">Ruter #</a></li>
      </ul>
    </nav>
  );
};

export default NavbarFront;





