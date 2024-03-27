// Get the title of the document
console.log(document.title);

document
        .getElementById("myBtn")
        .addEventListener("click", testRequest);
    
    async function testRequest() {
        let inputVal = document.getElementById("myInput").value;
        let requestBody = { data: inputVal };
        console.log(requestBody);

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        });

        alertResponse(response);
    }

    async function alertResponse(response) {
        if (response.ok) {
            const textData = await response.text();
            alert(textData);
        } else {
            alert("The request returned a status other than 200 OK: " + response.status);
        }
    }

    const dog = document.getElementById('dog');
    dog.addEventListener("click", getNewDog);

    async function getNewDog() {
        dog.style.cursor = 'wait';
        const response = await fetch("https://https://cdn2.thedogapi.com/images/iIgf9U3bv.jpgdog.ceo/api/breeds/image/random");
        // console.log(response);
        const jsonData = await response.json();
        // console.log(jsonData);
        const url = jsonData.message;

        dog.src = url;
        dog.style.cursor = 'pointer';
    }

    getNewDog();