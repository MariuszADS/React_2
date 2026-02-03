
import React from 'react';
import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import { miejsca } from '../data/miejsca';
import Miejsce from '../Components/Miejsce';
import '../App.css'
import { useTranslation } from 'react-i18next';

const Miejsca_warte_uwagi = () => {
  const {t} = useTranslation()
  return (
    <div className="linear-gradient">
      <SmallLogo />
      <Navbar_white />
      <h3 className="main_header">
        {t("places_to_visit")}</h3>
      <div className="flex-container-miejsca">
        {miejsca.map((key, index) => (
          <Miejsce key={index} miejsce={key} />
        ))}
        
      </div>
      <Footer />
    </div>
  );
};

export default Miejsca_warte_uwagi;
