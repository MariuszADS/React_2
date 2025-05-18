import React, { useState, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function Carousel({ data, children }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const isThrottled = useRef(false); /* blokada */

  const throttleClick = (callback) => {
    if (isThrottled.current) return;
    isThrottled.current = true;
    callback();
    setTimeout(() => {
      isThrottled.current = false;
    }, 300); 
  };

  const nextSlide = () => {
    throttleClick(() =>
      setSlideIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    );
  };

  const prevSlide = () => {
    throttleClick(() =>
      setSlideIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          data-testid="arrow-left"
          className="arrow arrow-left"
        />
        {data.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.alt}
            className={slideIndex === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          data-testid="arrow-right"
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={
                slideIndex === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlideIndex(idx)}
            />
          ))}
        </span>
      </div>
      <div className="carousel-text">{children}</div>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.node,
};
