import React, { useState } from 'react';
import axios from 'axios';

function AddRecipeForm() {
    const [recipeJson, setRecipeJson] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const submitRecipe = async () => {
        setErrorMessage('');
        let recipe;
        try {
            recipe = JSON.parse(recipeJson);
        } catch (error) {
            setErrorMessage('Malformed JSON');
            return;
        }
        if (!recipe.title || !recipe.ingredients || !recipe.directions) {
            setErrorMessage('Missing required fields');
            return;
        }
        axios.post('http://localhost:3001/api/userRecipes', recipe)
        .then(response => {
            console.log('Recipe added:', response.data);
            setRecipeJson(''); // clear the form
        })
        .catch(error => {
            console.error('Error adding recipe:', error.response ? error.response.data : error);
            console.error('Error adding recipe:', error);
            setErrorMessage('Failed to add recipe');
        });
    };

    return (
        <div>
            <textarea 
            value={recipeJson} 
            onChange={e => 
            setRecipeJson(e.target.value)}
            placeholder='{"title": "", "description": "", "ingredients": "", "directions": ""}' 
            />
            <button onClick={submitRecipe}>Submit</button>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
}

export default AddRecipeForm;