import React from 'react';
import PropTypes from "prop-types";
import Carousel from "./Carousel";

export default function Miejsce({ miejsce }) {
  return (
    <div className="miejsce" data-testid="miejsce-element">
      <Carousel data={miejsce.images}>
        <h2>{miejsce.title}</h2>
        <p>{miejsce.description}</p>
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
    description: PropTypes.string.isRequired
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
