// Get the title of the document
console.log(document.title);

// Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.
fetch('https://api.artic.edu/api/v1/artworks')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data and use it to populate your application's content and features
    console.log(data);

    // Creating a new div element
    const newDiv = document.createElement('div');
    newDiv.className = "cakediv";

    // Append the new div to the body of the document
    document.body.appendChild(newDiv);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



