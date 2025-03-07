import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Miejsca_context = ({ images, altTexts, text, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="miejsca-container">
      <img
        src={images[currentIndex]}
        alt={altTexts[currentIndex]}
        className="miejsca-image"
      />
      <p className="miejsca-text">{text}</p>
    </div>
  );
};

// ✅ Poprawione PropTypes
Miejsca_context.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  altTexts: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  interval: PropTypes.number,
};

export default Miejsca_context;
