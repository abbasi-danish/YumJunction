    import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
    const slides = [
        { type: 'image', content: 'image1.jpg' },
        { type: 'text', content: 'Slide 2' },
        { type: 'image', content: 'image3.jpg' },
    ];
    const title = 'Test Carousel';

    test('renders carousel component with initial slide', () => {
        render(<Carousel slides={slides} title={title} />);
        
        // Assert that the title is rendered
        expect(screen.getByText(title)).toBeInTheDocument();

        // Assert that the initial slide is rendered
        expect(screen.getByAltText('Slide 0')).toBeInTheDocument();
    });

    test('clicking next button should display the next slide', () => {
        render(<Carousel slides={slides} title={title} />);
        
        // Click the next button
        fireEvent.click(screen.getByTestId('nextSlide'));

        // Assert that the next slide is rendered
        expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
    });

    test('clicking prev button should display the previous slide', () => {
        render(<Carousel slides={slides} title={title} />);
        
        // Click the prev button
        fireEvent.click(screen.getByTestId('prevSlide'));

        // Assert that the previous slide is rendered
        expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
    });
});