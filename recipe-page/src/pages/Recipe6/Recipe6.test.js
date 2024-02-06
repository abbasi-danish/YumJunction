import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe6 from './Recipe6';

describe('Recipe6', () => {
  test('renders the recipe title', () => {
    render(<Recipe6 />);
    const titleElement = screen.getByText("Krabby Patty");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe6 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe6 />);
    const ingredientsText = screen.getByText('Ingredients');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe6 />);
    const directionsText = screen.getByText('Instructions');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});