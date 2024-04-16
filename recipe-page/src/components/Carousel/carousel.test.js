import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
    const slides = [
        { type: 'text', content: 'Slide' },
        { type: 'text', content: 'Slide 2' },
        { type: 'image', content: 'image3.png' },
    ];

    test('renders without crashing', () => {
        render(<Carousel slides={slides} title="Test Carousel" />);
    });

    test('goes to next slide when next button is clicked', () => {
        const { getByText, getByAltText } = render(<Carousel slides={slides} title="Test Carousel" />);
        const nextButton = getByText('Next Slide');
        fireEvent.click(nextButton);
        const slide = getByText(`Slide 2`);
        expect(getByText('Slide 2')).toBeInTheDocument();
    });

    test('goes to previous slide when previous button is clicked', () => {
        const { getByText, getByAltText } = render(<Carousel slides={slides} title="Test Carousel" />);
        const prevButton = getByText('Previous Slide');
        fireEvent.click(prevButton);
        const slide = getByAltText('Slide');
        expect(slide.src).toContain('image3.png');
    });
});