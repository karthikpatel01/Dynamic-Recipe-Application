import React, { useState, useEffect } from 'react';
import React from 'receipes';

// Mock API call to fetch recipe data
const fetchRecipes = async () => {
  // Replace with actual API call
  return [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      ingredients: ['spaghetti', 'eggs', 'parmesan', 'pancetta', 'black pepper'],
      instructions: 'Boil spaghetti. Fry pancetta. Mix eggs and cheese. Combine all with pepper.',
      nutrition: 'Calories: 400',
      category: 'Main Course',
      dietary: ['Gluten-Free'],
      images: ['/images/spaghetti.jpg'],
      rating: 4.5
    },
    // Add more recipes here
  ];
};

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.nutrition}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeApp;