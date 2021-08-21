import React from "react";
import Spoiler from "./Spoiler";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import slide4 from "../assets/img/slide4.jpg";

function Slider() {
  const [slideIndex, setSlideIndex] = React.useState(0);

  const slides = [
    { src: slide1, content: <Spoiler quantity="7" /> },
    { src: slide2, content: <></> },
    {
      src: slide3,
      contentClass: "text",
      content: (
        <>
          <h3>Lorem Ipsum</h3>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
        </>
      ),
    },
    {
      src: slide4,
      contentClass: "text",
      content: (
        <>
          <h3>Ipsum Lorem</h3>
        </>
      ),
    },
  ];
  const toLeft = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };
  const toRight = () => {
    const temp = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(temp % slides.length);
  };
  return (
    <section className="slider">
      <h2 className="slider__title">Slider</h2>
      <div className="slider__items">
        {slides.map((slide, index) => (
          <div
            className={
              slideIndex === index ? "slider__item active" : "slider__item"
            }
            key={index}
          >
            <img src={slide.src} alt="" />
            <div className={slide.contentClass || ""}>{slide.content}</div>
          </div>
        ))}
      </div>
      <div className="slider__controls">
        <button onClick={toLeft} className="slider__left">back</button>
        <button onClick={toRight} className="slider__right">next</button>
      </div>
    </section>
  );
}

export default Slider;
