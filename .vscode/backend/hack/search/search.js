// script.js
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetchRecipes(query);
  });
  
  function fetchRecipes(query) {
    const appId = '1e7719d7'; // Replace with your Edamam app ID
    const appKey = '79aebf8b8a823e5241d20d49926791ce'; // Replace with your Edamam app key
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayRecipes(data.hits))
      .catch(error => console.error('Error fetching the recipes:', error));
  }
  
  function displayRecipes(recipes) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    console.log(recipes);
  
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe');
      console.log(recipe);
  
      recipeElement.innerHTML = `
        <h2>${recipe.recipe.label}</h2>
        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        <p><strong>Source:</strong> ${recipe.recipe.source}</p>
        <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
      `;
  
      resultsContainer.appendChild(recipeElement);
    });
  }
  