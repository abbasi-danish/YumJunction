import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe1 from './Recipe1';

describe('Recipe1', () => {
  test('renders the recipe title', () => {
    render(<Recipe1 />);
    const titleElement = screen.getByText("The Perfect Sandwich");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe1 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe1 />);
    const ingredientsText = screen.getByText('Ingredients');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe1 />);
    const directionsText = screen.getByText('Instructions');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});