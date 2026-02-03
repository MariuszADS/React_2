import React from 'react';
import PropTypes from "prop-types";
import Carousel from "./Carousel";
// import icon_B from "../assets/icons/icon_B.jpg"; 
import { useTranslation } from 'react-i18next';
import {miejsca} from "../data/miejsca"

export default function Miejsce({ miejsce }) {
  const {t} = useTranslation() 
  return (
    <div className="miejsce" data-testid="miejsce-element">
      <Carousel data={miejsce.images}>
        <h2>{miejsce.title} {miejsce.transportIcon && (
    <img src={miejsce.transportIcon} className='transport_icon' alt="transport"/>)}</h2>
        <h2>{miejsce.imageTransport}</h2>
        <p>{t(miejsce.descriptionKey)}</p>
        {/* <p>{t(miejsce.descriptionKey)}</p> */}
      </Carousel>
    </div>
  );
}

Miejsce.propTypes = {
  miejsce: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    transportIcon: PropTypes.string 
  }).isRequired
};


// import PropTypes from "prop-types";
// import Carousel from "./Carousel";

// export default function Place({ spot }) {
//   return (
//     <div className="miejsce">
//       <Carousel data={spot.images}>
//         <h2>{spot.title}</h2>
//         <p>{spot.description}</p>
//       </Carousel>
//     </div>
//   );
// }

// Place.propTypes = {
//   spot: PropTypes.shape({
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         src: PropTypes.string.isRequired,
//         alt: PropTypes.string.isRequired
//       })
//     ).isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
//   }).isRequired
// };
