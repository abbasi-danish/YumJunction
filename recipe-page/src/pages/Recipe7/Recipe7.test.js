import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Recipe7 from './Recipe7';

describe('Recipe7', () => {
  test('renders the recipe title', () => {
    render(<Recipe7 />);
    const titleElement = screen.getByText("Ratatouille");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the recipe image', () => {
    render(<Recipe7 />);
    const imageElement = screen.getByAltText("Dish");
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the list of ingredients', () => {
    render(<Recipe7 />);
    const ingredientsText = screen.getByText('Ingredients');
    const ingredients = screen.getAllByRole('listitem');
    expect(ingredientsText).toBeInTheDocument();
    expect(ingredients).toHaveLength(ingredients.length);
  });

  test('renders the list of directions', () => {
    render(<Recipe7 />);
    const directionsText = screen.getByText('Instructions');
    const directions = screen.getAllByRole('listitem');
    expect(directionsText).toBeInTheDocument();
    expect(directions).toHaveLength(directions.length);
  });
});