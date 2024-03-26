// Get the title of the document
console.log(document.title);

// Create new div
const newDiv = document.createElement('div');
newDiv.className = "cakediv";

// Create new paragraph element for fruits
const newParagraph1 = document.createElement('h2');
newParagraph1.className = "newparadiv1";
newParagraph1.textContent = 'cakes:';
newParagraph1.style.textDecoration = "underline";

// Select parent element
const parentDiv = document.querySelector('div');

// Append new paragraph for fruits to parent element
parentDiv.after(newParagraph1);

// Create unordered list for fruits
const cakeul = document.createElement('ul');
cakeul.className = "cakesul";
cakeul.style.backgroundColor = "Blue";

// Append unordered list for fruits to parent element
parentDiv.after(cakeul);

// Create list items for fruits and append to unordered list
const cakes = ['Vanilla', 'Strawberry', 'Chocolate', 'Red Velvet'];
cakes.forEach(cakes => {
    const cakesli = document.createElement('li');
    cakesli.className = "cakesli";
    cakesli.innerHTML = cakesli;
    cakeul.appendChild(cakesli);
});

// Style fruit list items
document.querySelectorAll('.cakesli').forEach(cakesli => {
    cakesli.style.color = "orange";
});

// Create new paragraph element for flowers
const newParagraph2 = document.createElement('h2');
newParagraph2.className = "newparadiv2";
newParagraph2.textContent = 'Treats:';
newParagraph2.style.textDecoration = "underline";

// Append new paragraph for flowers after fruit unordered list
cakeul.after(newParagraph2);

// Create unordered list for flowers
const treatul = document.createElement('ul');
treatul.className = "treatul";
treatul.style.backgroundColor = "Yellow";

// Append unordered list for flowers after fruit unordered list
treatul.after(treatul);

// Create list items for flowers and append to unordered list
const treats = ['Cake Pops', 'Pretzels', 'Strawberry Shooters'];
treats.forEach(treats => {
    const treatli = document.createElement('li');
    treatli.className = "treatli";
    treatli.innerHTML = treats;
    treatli.appendChild(treatli);
});

// Style flower list items
document.querySelectorAll('.treatli').forEach(treatli => {
    treatli.style.color = "green";
});

// Log coordinates when window is clicked
window.addEventListener("click", function (event) {
    var x1 = event.clientX;
    var y1 = event.clientY;
    console.log('Clicked at coordinates: (x=' + x1 + ', y=' + y1 + ')');
});

// Update first fruit name
document.querySelector('.treatli').textContent = "Pineapple";

// Add form sections after flower unordered list
const treatdiv = document.querySelector('.treatul');
let section1 = document.createElement('section');
section1.id = "target1";
let section2 = document.createElement('section');
section2.id = "target2";
treatdiv.after(section1);
treatdiv.after(section2);

// Clone advertisement div and append to first form section
const t1 = document.getElementById('target1');
const div1 = document.querySelector('.adv');
t1.appendChild(div1.cloneNode(true));

// Create form element and append after second form section
const form = document.createElement('form');
form.id = "form";
treatdiv.after(form);

// Create error field div and append to form
const errorfield = document.createElement('div')
errorfield.id = "error"
errorfield.className = "error"
form.appendChild(errorfield);

// Create login header and append to form
const login = document.createElement('h2');
login.className = "Login";
login.textContent = 'Login:';
login.style.textDecoration = "underline";
form.appendChild(login);

// Create username label and input field, then append to form
const lableusername = document.createElement("label");
lableusername.className = "lableusername";
lableusername.textContent = "User Name : ";
form.appendChild(lableusername);
const usernameInput = document.createElement("input");
usernameInput.className = "userName";
usernameInput.id = "userName";
usernameInput.autocomplete = "on";
usernameInput.placeholder = "Username";
usernameInput.type = "text";
form.appendChild(usernameInput);
form.appendChild(document.createElement("br"));

// Create password label and input field, then append to form
const lablepassword = document.createElement("label");
lablepassword.className = "lablepassword";
lablepassword.textContent = "Password : ";
form.appendChild(lablepassword);
const passwordInput = document.createElement("input");
passwordInput.className = "password";
passwordInput.id = "password";
passwordInput.autocomplete = "on";
passwordInput.placeholder = "Password";
passwordInput.type = "password";
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));

// Create submit button and append to form
const submitButton = document.createElement('button');
submitButton.id = "submit";
submitButton.textContent = "Submit";
submitButton.type = "submit";
form.appendChild(submitButton);

// Handle form submission
const formSubmitHandler = (event) => {
    event.preventDefault();

    const namef = document.getElementById('userName').value;
    const passf = document.getElementById('password').value;
    const errorelement = document.querySelector('.error');

    let messages = [];

    if (namef === '' || namef === null) {
        messages.push('Username is required');
    } else if (passf.length < 8) {
        messages.push('Password should be at least 8 characters long');
    } else if (namef === 'jaya' && passf === 'password') {
        errorelement.style.backgroundColor = "green";
        messages.push('User validated');
    } else {
        messages.push('User not validated');
    }

    errorelement.innerText = messages.join(', ');
};

// Add form submit event listener
form.addEventListener("submit", formSubmitHandler);

// Handle fruit buy button click
document.querySelectorAll('.treatli').forEach((el) => {
    const button = document.createElement('button');
    button.textContent = 'BUY';
    button.className = 'buyButton';

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'quantityInput';
    input.placeholder = 'Enter quantity';

    el.appendChild(input);
    el.appendChild(button);

    button.addEventListener('click', () => {
        const quantity = parseInt(input.value) || 0;
        alert("You bought " + quantity + " " + el.textContent.trim());
    });
});

// Handle flower buy button click
document.querySelectorAll('.treatli').forEach((el) => {
    const button = document.createElement('button');
    button.textContent = 'BUY';
    button.className = 'buyButton';

    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'quantityInput';
    input.placeholder = 'Enter quantity';

    el.appendChild(input);
    el.appendChild(button);

    button.addEventListener('click', () => {
        const quantity = parseInt(input.value) || 0;
        alert("You bought " + quantity + " " + el.textContent.trim());
    });
});
