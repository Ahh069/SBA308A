// Fetch data using Fetch API
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Data is retrieved successfully, now you can populate your application's content
    populateContent(data);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

function populateContent(data) {
  // Assuming data is an array of movie objects
  data.forEach(movie => {
    // Populate your application's content with movie information
    console.log(movie.title, movie.year);
    // Example: You can create HTML elements dynamically and append them to the DOM
    // const movieElement = document.createElement('div');
    // movieElement.textContent = `${movie.title} (${movie.year})`;
    // document.getElementById('movieList').appendChild(movieElement);
  });
}


// Import Axios
const axios = require('axios');

// Fetch data using Axios
axios.get('https://api.example.com/movies')
  .then(response => {
    // Data is retrieved successfully, now you can populate your application's content
    populateContent(response.data);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

function populateContent(data) {
  // Assuming data is an array of movie objects
  data.forEach(movie => {
    // Populate your application's content with movie information
    console.log(movie.title, movie.year);
    // Example: You can create HTML elements dynamically and append them to the DOM
    // const movieElement = document.createElement('div');
    // movieElement.textContent = `${movie.title} (${movie.year})`;
    // document.getElementById('movieList').appendChild(movieElement);
  });
}
