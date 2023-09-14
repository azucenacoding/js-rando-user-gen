// Declare a function called fetchUser; Inside the function, call the showSpinner function; Make a fetch request to the following API endpoint, then resolve the first promise by converting the response into a JSON string; Then, resolve the second promise with data by calling the hideSpinner function and then the displayUser function with the first index in the data.results object array
function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api/')
    // Then runs for a resolve; Takes in a method; fetch returns a response; response.json returns a new promise; 
    .then((response) => response.json())
    .then((data) => {
        hideSpinner();
        displayUser(data.results[0]);
    })
}


// Declare an arrow function called displayUser that takes in a parameter of user; Inside the function, declare a variable called userDisplay and set it equal to the selected 'user' query from the document; If the user's gender value is strictly equal to female, set the background color of the body to a purple color; Else, set the background color of the body to a blue color. Set the inner HTML of userDisplay to reflect how a randomly generated user would appear in the HTML document, with the name, email, age, phone number, and location dynamically taken from the API.
const displayUser = (user) => {
    const userDisplay = document.querySelector('#user');


    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
    } else {
        document.body.style.backgroundColor = 'steelblue';
    }

    userDisplay.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${user.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${user.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
      </div>
    </div>
  </div>`
};

// Create a function called showSpinner; Select the query with the class of spinner in the document and set its display style to a block.
function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}


// Create a function called hideSpinner; Select the query with the class of spinner and set its display style to none.
function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}


// Select the query with the id of generate from the document and add an event listener onto it; Once it listens for the click, call the function fetchUser;
document.querySelector('#generate').addEventListener('click', fetchUser);

// Call the function fetchUser to run upon page load
fetchUser();