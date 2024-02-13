import { render, screen } from '@testing-library/react';
import NewPage from './NewPage';

describe('NewPage component', () => {
  const title = 'Test Recipe';
  const ingredients = ['Ingredient 1', 'Ingredient 2'];
  const directions = ['Step 1', 'Step 2'];
  const pageImage = 'test-image.jpg';

  test('renders page title', () => {
    render(<NewPage title={title} ingredients={ingredients} directions={directions} pageImage={pageImage} />);
    const pageTitle = screen.getByText(title);
    expect(pageTitle).toBeInTheDocument();
  });

  test('renders ingredients', () => {
    render(<NewPage title={title} ingredients={ingredients} directions={directions} pageImage={pageImage} />);
    ingredients.forEach(ingredient => {
        const ingredientElement = screen.getByText(ingredient);
        expect(ingredientElement).toBeInTheDocument();
    });
  });

  test('renders directions', () => {
    render(<NewPage title={title} ingredients={ingredients} directions={directions} pageImage={pageImage} />);
    directions.forEach(direction => {
        const directionElement = screen.getByText(direction);
        expect(directionElement).toBeInTheDocument();
    });
    });

  test('renders page image', () => {
    render(<NewPage title={title} ingredients={ingredients} directions={directions} pageImage={pageImage} />);
    const pageImageElement = screen.getByAltText('Dish');
    expect(pageImageElement).toBeInTheDocument();
    expect(pageImageElement.src).toContain(pageImage);
  });
});