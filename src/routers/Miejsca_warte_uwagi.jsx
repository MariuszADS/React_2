
import React from 'react';
import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import { miejsca } from '../data/miejsca';
import Miejsce from '../Components/Miejsce';
import '../App.css'
import { useTranslation } from 'react-i18next';
import Carousel from '../Components/Carousel';

const Miejsca_warte_uwagi = () => {
  const { t } = useTranslation()
  return (
    <div className="linear-gradient">
      <SmallLogo />
      <Navbar_white />
      <h3 className="main_header">
        {t("places_to_visit")}</h3>
      <div className="flex-container-miejsca">
        {miejsca.map((key) => (
          <Miejsce miejsce={key} >
            <Carousel>
              {/* tutaj docelowo zamierzam wyświetać cześć komponentu <p>{miejsce.description}</p> do tłumaczenia albo całość. Aby ułatwić tłumaczenie muszę recznie zapisać wszystkie descripption tutaj */}
              {/* <p>{miejsca.description}</p> */}
              </Carousel>
          </Miejsce>
        ))}

      </div>
      <Footer />
    </div>
  );
};

export default Miejsca_warte_uwagi;
