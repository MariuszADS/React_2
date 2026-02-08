
import React from 'react';
import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import { miejsca } from '../data/miejsca';
import Miejsce from '../Components/Miejsce';
import '../App.css'
import { useTranslation } from 'react-i18next';
const Miejsca_warte_uwagi = () => {
  const { t } = useTranslation()
  const miejscaTranslated = miejsca.map((miejsce) => ({
    ...miejsce,
    title: miejsce.titleKey ? t(miejsce.titleKey) : miejsce.title,
    description: miejsce.descriptionKey ? t(miejsce.descriptionKey) : miejsce.description,
  }))
  return (
    <div className="linear-gradient">
      <SmallLogo />
      <Navbar_white />
      <h3 className="main_header">
        {t("places_to_visit")}</h3>
      <div className="flex-container-miejsca">
        {miejscaTranslated.map((miejsce) => (
          <Miejsce
            key={miejsce.descriptionKey || miejsce.title}
            miejsce={miejsce}
          />
        ))}


      </div>
      <Footer />
    </div>
  );
};

export default Miejsca_warte_uwagi;
