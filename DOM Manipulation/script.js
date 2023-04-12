// script.js
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
  });
  
  document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
  });
  
  document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'none';
  });

  
  const foodData = [
    { name: 'Pizza', category: 'Italian' },
    { name: 'Burger', category: 'American' },
    { name: 'Sushi', category:'Japanese' },
    { name: 'Tacos', category: 'Mexican' },
    { name: 'Pasta', category: 'Italian' },
    { name: 'Noodles', category: 'Chinese' },
    ];
    
    // Function to generate food cards
    function generateFoodCards(foodList) {
    const foodCardsContainer = document.getElementById('foodCards');
    foodCardsContainer.innerHTML = '';
    for (let i = 0; i < foodList.length; i++) {
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
    foodCard.innerHTML = `<h3>${foodList[i].name}</h3> <p>Category: ${foodList[i].category}</p>` ;
    foodCardsContainer.appendChild(foodCard);
    }
    }
    
    // Initial food list on page load
    generateFoodCards(foodData);
    
    // Search functionality
    document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredFood = foodData.filter(function(food) {
    return food.name.toLowerCase().includes(searchTerm) || food.category.toLowerCase().includes(searchTerm);
    });
    generateFoodCards(filteredFood);
    });

    // script.js
document.getElementById('dineOutTab').addEventListener('click', function() {
    window.location.href = 'dine-out.html'; // Redirect to dine-out.html page
  });
  
  document.getElementById('dineInTab').addEventListener('click', function() {
    window.location.href = 'dine-in.html'; // Redirect to dine-in.html page
  });
  