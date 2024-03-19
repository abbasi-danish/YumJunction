import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import AddRecipeForm from './AddRecipeForm';

jest.mock('axios');

describe('AddRecipeForm', () => {
    test('renders form and submits data', async () => {
        const recipe = {
            title: 'Test Recipe',
            description: 'Test Description',
            ingredients: 'Test Ingredients',
            directions: 'Test Directions'
        };
        axios.post.mockResolvedValue({ data: recipe });

        const { getByPlaceholderText, getByText } = render(<AddRecipeForm />);

        fireEvent.change(getByPlaceholderText('{"title": "", "description": "", "ingredients": "", "directions": ""}'), {
            target: { value: JSON.stringify(recipe) }
        });
        fireEvent.click(getByText('Submit'));

        await waitFor(() => expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/userRecipes', recipe));
    });

    test('renders error message for malformed JSON', () => {
        const { getByPlaceholderText, getByText } = render(<AddRecipeForm />);

        fireEvent.change(getByPlaceholderText('{"title": "", "description": "", "ingredients": "", "directions": ""}'), {
            target: { value: 'not valid JSON' }
        });
        fireEvent.click(getByText('Submit'));

        expect(getByText('Malformed JSON')).toBeInTheDocument();
    });

    // Add more tests as needed...
});