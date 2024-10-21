// Grabs input tag
let inputFields = document.getElementsByTagName('input');

// Initializes the array which will hold the items the user hasn't bought yet
let unpurchased_items = [];

let unpurchasedItem = ''; // Will hold value that should be added to an li tag

// Buttons for displaying their respective items
let PurchasedBtn = document.querySelector('.show-purchased-btn');
let UnpurchasedBtn = document.querySelector('.show-unpurchased-btn');
let allItemsBtn = document.querySelector('.allItemsBtn')

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
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none';  
            li.classList.remove('purchased-items')
        } else {
            li.style.textDecoration = 'line-through';  
            li.classList.add('purchased-items')
        }
    });
}

PurchasedBtn.addEventListener('click', function() {
    let allItems = document.querySelectorAll('#unpurchased-items-list li');
    allItems.forEach(function(item) {
        if (item.classList.contains('purchased-items')) {
            item.style.display = 'list-item'; // Show purchased items
        } else {
            item.style.display = 'none';  // Hide unpurchased items
        }
    });
});

// Function to show only unpurchased items
UnpurchasedBtn.addEventListener('click', function() {
    let allItems = document.querySelectorAll('#unpurchased-items-list li');
    allItems.forEach(function(item) {
        if (item.classList.contains('purchased-items')) {
            item.style.display = 'none'; // Hide purchased items
        } else {
            item.style.display = 'list-item';  // Show unpurchased items
        }
    });
});

allItemsBtn.addEventListener('click', function() {
    let allItems = document.querySelectorAll('#unpurchased-items-list li');
    allItems.forEach(function(item) {
        item.style.display = 'list-item'
    })
})