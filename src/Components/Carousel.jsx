import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../Components/Carousel.css";
import PropTypes from "prop-types";
// import { data } from "react-router-dom";

export const Carousel = ({ data,children }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
  <div className="carousel-container">
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
          src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
        />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
      <div className="caruosel-text">
        <p>{children}</p> 
      </div>
</div>
  );
};

Carousel.propTypes = {
  data: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};
