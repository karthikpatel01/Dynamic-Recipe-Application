// Recipe Data Management
const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      ingredients: [
        { name: 'spaghetti', quantity: '200g' },
        { name: 'eggs', quantity: '2' },
        { name: 'parmesan', quantity: '50g' },
        { name: 'pancetta', quantity: '100g' },
        { name: 'black pepper', quantity: 'to taste' }
      ],
      instructions: 'Boil spaghetti. Fry pancetta. Mix eggs and cheese. Combine all with pepper.',
      rating: 4.5,
      dietary: ['Gluten-Free']
    },
    // Add more recipes here
  ];
  
  // Ingredient List Generation
  const generateIngredientList = (recipe) => {
    return recipe.ingredients.map(ing => ${ing.quantity} ${ing.name}).join(', ');
  };
  
  // Search Functionality
  const searchRecipes = (query) => {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
  };
  
  // Recipe Rating System
  const addRating = (recipeId, rating) => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      recipe.rating = (recipe.rating + rating) / 2;  // Simple average rating
    }
  };
  
  // Local Recipe Storage
  const saveRecipeLocally = (recipe) => {
    localStorage.setItem(recipe-${recipe.id}, JSON.stringify(recipe));
  };
  
  // API Interaction for Recipe Retrieval
  const fetchRecipeData = async () => {
    // Replace with actual API call
    const response = await fetch('https://api.example.com/recipes');
    const data = await response.json();
    return data;
  };
  
  // Timer Functionality
  const startTimer = (duration, callback) => {
    setTimeout(callback, duration);
  };
  
  // Unit Conversion for Ingredients
  const convertUnits = (quantity, fromUnit, toUnit) => {
    // Add conversion logic here
    return quantity;  // Placeholder
  };
  
  // Dietary Restriction Filtering
  const filterByDietary = (restriction) => {
    return recipes.filter(recipe => recipe.dietary.includes(restriction));
  };
  
  // Delayed Loading of Recipe Images
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
      rootMargin: '50px 0px',
      threshold: 0.01
    };
    
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(onIntersection, config);
      images.forEach(image => observer.observe(image));
    }
  
    function onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }
  };
  
  document.addEventListener('DOMContentLoaded', lazyLoadImages);