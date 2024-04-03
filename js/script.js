// Get the title of the document
console.log("in scripts");

// document
//         .getElementById("myBtn")
//         .addEventListener("click", testRequest);
    
//     async function testRequest() {
//         let inputVal = document.getElementById("myInput").value;
//         let requestBody = { data: inputVal };
//         console.log(requestBody);

//         const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=9&x-api-key=live_fEyaF5CcS1CK9eduBzKqxtkNjeYcbCYn3E3nF5Q8RiZn0KYRRMlFa8AbL4a333Lm', {
//             method: 'GET',
//             body: JSON.stringify(requestBody),
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//             }
//         });

//         alertResponse(response);
//     }

    // async function alertResponse(response) {
    //     if (response.ok) {
    //         const textData = await response.text();
    //         alert(textData);
    //     } else {
    //         alert("The request returned a status other than 200 OK: " + response.status);
    //     }
    // }

    const dog = document.getElementById('dog');
    dog.addEventListener("click", getNewDog);

    async function getNewDog() {
        dog.style.cursor = 'wait';
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        console.log(response);
        const jsonData = await response.json();
        // console.log(jsonData);
        const url = jsonData.message;

        dog.src = url;
        dog.style.cursor = 'pointer';
    }

    getNewDog();