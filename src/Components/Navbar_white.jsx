import { Link } from "react-router-dom";
import React from 'react'; 
import { useTranslation } from 'react-i18next';
import i18n from "../i18n/i18n";

const Navbar_white = () => {
  const {t} = useTranslation()
  return (
    <nav className="top-nav_white">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="lang-switch-nav" aria-label="Language switcher">
        <button className="lang-button-nav" type="button" onClick={() => i18n.changeLanguage("pl")}>PL</button>
        <button className="lang-button-nav" type="button" onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button className="lang-button-nav" type="button" onClick={() => i18n.changeLanguage("no")}>NO</button>
      </div>
      <ul className="menu">
        <li><Link to="/">Oslo&nabo</Link></li>
        <li><Link to="/wskazowki">{t("wskazowki")}</Link></li>
        <li><Link to="/miejsca">{t("miejsca")}</Link></li>
        <li><a href="https://ruter.no/" target="_blank" rel="noopener noreferrer">Ruter #</a></li>
      </ul>
    </nav>
  );
};

export default Navbar_white;



