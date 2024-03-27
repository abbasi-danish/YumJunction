require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;

async function getIngredientsDetails(ingredients) {
    const promises = ingredients.map(ingredient => axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${ingredient}`));

        try {
            const searchResponse = await Promise.all(promises);
            for (const searchResponse of searchResponse){
                const topMatch = searchResponse.data.foods && searchResponse.data.foods[0];
                if (topMatch) {
                    const detailsResponse = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${topMatch.fdcId}?api_key=${API_KEY}`);
                    console.log(detailsResponse.data);
                } else {
                    console.log(`No match found for ${ingredient}`);
                }
            }
        } catch (error) {
            console.error('Error fetching ingredient details:', error);
        }
    
}

getIngredientsDetails(["boneless ribeye", "thyme", "rosemary", "salt", "pepper", "lobster", "vegetable oil", "lemon juice", "egg yolks", "bacon", "cornish game hen", "vidalia onion", "sourdough loaf", "cream cheese", "dill", "dill pickle", "egg", "cucumber", "roma tomato", "tears", "flour", "sugar", "baking powder", "baking soda", "kosher salt", "buttermilk", "eggs", "butter", "maple syrup", "bananas", "yellow food color", "granulated sugar", "water", "whole milk", "vanilla extract", "ground beef", "breadcrumbs", "onions", "pickles", "ketchup", "mustard", "hamburger buns", "tomato paste", "garlic", "olive oil", "eggplant", "zucchini", "yellow squash", "red bell pepper", "yellow bell pepper", "thyme leaves", "mascarpone cheese"]);