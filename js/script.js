// Get the title of the document
console.log(document.title);

// Fetching random dog images from the Dog CEO's Dog API
fetch('https://dog.ceo/api/breeds/image/random/5')
  .then(response => response.json())
  .then(data => {
    // Log the fetched data
    console.log(data);

    // Process the fetched data and populate your application's content
    const dogImages = data.message;
    const galleryDiv = document.getElementById('gallery');

    // Clear previous content of the gallery
    galleryDiv.innerHTML = '';

    // Display fetched dog images in the gallery
    dogImages.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Dog';
      galleryDiv.appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  
