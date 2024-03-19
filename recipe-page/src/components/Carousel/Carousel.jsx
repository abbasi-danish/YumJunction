import React, { useState } from 'react';

const Carousel = ({ slides, title }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <h1>{title}</h1>
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button>
            {slides[activeIndex].type === 'image' ? (
                <img
                    src={slides[activeIndex].content}
                    alt={`Slide ${activeIndex}`}
                    className="carousel__img"
                />
            ) : (
                <p className="carousel__text carousel__text--large">{slides[activeIndex].content}</p>
            )}
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;