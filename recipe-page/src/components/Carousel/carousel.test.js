import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  const title = 'Test Carousel';

  test('renders carousel title', () => {
    const { getByText } = render(<Carousel images={images} title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  test('renders initial image', () => {
    const { getByAltText } = render(<Carousel images={images} title={title} />);
    expect(getByAltText('Slide 0')).toHaveAttribute('src', images[0]);
  });

  test('changes image on next button click', () => {
    const { getByAltText, getByText } = render(<Carousel images={images} title={title} />);
    fireEvent.click(getByText('>'));
    expect(getByAltText('Slide 1')).toHaveAttribute('src', images[1]);
  });

  test('changes image on prev button click', () => {
    const { getByAltText, getByText } = render(<Carousel images={images} title={title} />);
    fireEvent.click(getByText('<'));
    expect(getByAltText('Slide 2')).toHaveAttribute('src', images[2]);
  });

  test('loops back to the first image after the last image', () => {
    const { getByAltText, getByText } = render(<Carousel images={images} title={title} />);
    fireEvent.click(getByText('>'));
    fireEvent.click(getByText('>'));
    fireEvent.click(getByText('>'));
    expect(getByAltText('Slide 0')).toHaveAttribute('src', images[0]);
  });

  test('loops back to the last image before the first image', () => {
    const { getByAltText, getByText } = render(<Carousel images={images} title={title} />);
    fireEvent.click(getByText('<'));
    expect(getByAltText('Slide 2')).toHaveAttribute('src', images[2]);
  });
});