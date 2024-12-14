const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('#cards');

//Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
    //Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();
    //Add a console.table() expression method to check the data response at this point in the console window.
    //console.table(data.prophets); // temporary testing of data retreival
    //Comment out the console line and call a function named "displayProphets" and include the "data.prophets" argument.
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object.
  }
  //Call the function getProphetData() in the main line of your .js code to test the fetch and response.
  getProphetData();

//Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
const displayProphets = (prophets) => {
    //Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    //create a section element and store it in a variable named card using createElement(),
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let dateOfbirth = document.createElement('p');
      let placeOfbirth = document.createElement('p');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet,lastname}`; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    // this was not in the rubric but i added it due to the styling
    dateOfbirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfbirth.textContent = `Place of Birth: ${prophet.birthplace}`;
    //end of non-rubric code
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    //Using appendChild() on the section element named "card", add the heading and image elements one at a time.
    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(dateOfbirth);
    card.appendChild(placeOfbirth);
    card.appendChild(portrait);

    //Finally, add the section card to the "cards" div that was selected at the beginning of the script file.
    cards.appendChild(card);
}); // end of arrow function and forEach loop
}