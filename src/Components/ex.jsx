// // import { useEffect, useState } from "react";

// // export default function Slider() {
// //   const slides = [
// //     "image1.jpg",
// //     "image2.jpg",
// //     "image3.jpg"
// //   ];

// //   const [slideIndex, setSlideIndex] = useState(0);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       nextSlide();
// //     }, 5000);

// //     return () => clearInterval(intervalId);
// //   }, [slideIndex]);

// //   const showSlide = (index) => {
// //     if (index >= slides.length) {
// //       setSlideIndex(0);
// //     } else if (index < 0) {
// //       setSlideIndex(slides.length - 1);
// //     } else {
// //       setSlideIndex(index);
// //     }
// //   };

// //   const nextSlide = () => {
// //     showSlide(slideIndex + 1);
// //   };

// //   const prevSlide = () => {
// //     showSlide(slideIndex - 1);
// //   };

// //   return (
// //     <div className="slider">
// //       <div className="slides">
// //         {slides.map((src, index) => (
// //           <img
// //             key={index}
// //             src={src}
// //             alt={`Image #${index + 1}`}
// //             className={`slide ${index === slideIndex ? "displaySlide" : ""}`}
// //           />
// //         ))}
// //       </div>
// //       <button className="prev" onClick={prevSlide}>
// //         &#10094;
// //       </button>
// //       <button className="next" onClick={nextSlide}>
// //         &#10095;
// //       </button>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// export default function Slider() {
//   const slides = [
//     { src: "image1.jpg", alt: "Image #1" },
//     { src: "image2.jpg", alt: "Image #2" },
//     { src: "image3.jpg", alt: "Image #3" },
//   ];

//   const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [slideIndex]);

//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide.src}
//             alt={slide.alt}
//             className={slideIndex === index ? "slide" : "slide slide-hidden"}
//           />
//         ))}
//         <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
//         <span className="indicators">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               className={slideIndex === idx ? "indicator" : "indicator indicator-inactive"}
//               onClick={() => setSlideIndex(idx)}
//             ></button>
//           ))}
//         </span>
//       </div>
//     </div>
//   );
// }