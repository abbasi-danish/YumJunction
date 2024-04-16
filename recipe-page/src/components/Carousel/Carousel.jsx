// import './Carousel.css'; 
import React, { useState } from 'react';
import { Card } from 'react-bootstrap'; // Import the Card component
import {Button} from 'react-bootstrap'; // Import the Button component

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
            <Button style={{ backgroundColor: '#333333' }} onClick={prevSlide}> Previous Slide
            </Button>
            {slides[activeIndex].type === 'image' ? (
                <img
                    src={slides[activeIndex].content}
                    alt={`Slide`}
                    className="carousel__img"
                />
            ) : (
                <Card style={{ backgroundColor: '#0e4fab' }}> {/* Add inline style to set the background color */}
                    <p className="carousel__text carousel__text--large">{slides[activeIndex].content}</p>
                </Card>
            )}
            <Button style={{ backgroundColor: '#333333' }} onClick={nextSlide}> Next Slide
            </Button>
        </div>
    );
};

export default Carousel;
