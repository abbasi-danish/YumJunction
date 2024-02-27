import React, { useState, useContext } from 'react';
import { GroceryListContext } from './grocerylistcontext';

const AddGroceryItemForm = () => {
  const [itemName, setItemName] = useState('');
  const { handleAddItem } = useContext(GroceryListContext);

  const allowedItems = [
    "boneless ribeye",
    "thyme",
    "rosemary",
    "salt",
    "pepper",
    "lobster",
    "vegetable oil",
    "lemon juice",
    "egg yolks",
    "bacon",
    "cornish game hen",
    "vidalia onion",
    "sourdough loaf",
    "cream cheese",
    "dill",
    "dill pickle",
    "egg",
    "cucumber",
    "roma tomato",
    "tears",
    "flour",
    "sugar",
    "baking powder",
    "baking soda",
    "kosher salt",
    "buttermilk",
    "eggs",
    "butter",
    "maple syrup",
    "bananas",
    "yellow food color",
    "granulated sugar",
    "water",
    "whole milk",
    "vanilla extract",
    "ground beef",
    "breadcrumbs",
    "onions",
    "pickles",
    "ketchup",
    "mustard",
    "hamburger buns",
    "tomato paste",
    "garlic",
    "olive oil",
    "eggplant",
    "zucchini",
    "yellow squash",
    "red bell pepper",
    "yellow bell pepper",
    "thyme leaves",
    "mascarpone cheese"
]

const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName !== '' && allowedItems.includes(itemName)) {
      handleAddItem({ name: itemName, quantity: 1 });
      setItemName('');
    } else {
      alert('Invalid item. Please enter a valid item.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
        placeholder="Add grocery item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddGroceryItemForm;