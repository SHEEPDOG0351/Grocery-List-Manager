// Grabs input tag
let inputFields = document.getElementsByTagName('input');

// Initializes the array which will hold the items the user hasn't bought yet
let unpurchased_items = [];

let unpurchasedItem = ''; // Will hold value that should be added to an li tag

// Add event listeners for 'Enter' key press on input fields
for (let i = 0; i < inputFields.length; i++) {
    let input = inputFields[i];
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            additem(input);
        }
    });
}

function additem(input) {
    // Gets value from input tag which will be whatever the user typed into it.
    let inputText = input.value;

    // Push the input text into the 'unpurchased_items' array as long as it's not empty
    if (inputText.trim() !== "") {
        unpurchased_items.push(inputText);
        unpurchasedItem = inputText;

        // Clear the input field after adding the item
        input.value = '';
        displayUnpurchasedItem(unpurchasedItem);
    }
}

function displayUnpurchasedItem(string) {
    // Find the <ul> element where the <li> should be appended
    let ul = document.getElementById('unpurchased-items-list');

    // Create a new <li> element
    let li = document.createElement('li');

    // Set the text of the <li> to the new item
    li.textContent = string;

    // Adds a class to the newly created li tag
    li.classList.add('unpurchased-item');

    // Append the new <li> to the <ul>
    ul.appendChild(li);

    // Add a click event listener to apply strikethrough
    li.addEventListener('click', function() {
        // Toggle strikethrough when clicked
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none';  // Remove strikethrough
        } else {
            li.style.textDecoration = 'line-through';  // Add strikethrough
        }
    });
}
