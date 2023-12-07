// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// declare the URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather';

// create the query string
const queryString = '?lat=49.75&lon=6.64&units=imperial&appid=[5c95f24fe42fedd4c081cee9b6a63e16]';

// combine the URL and query string
const fullUrl = url + queryString;

// define the asynchronous function to fetch the data
async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// invoke the apiFetch function
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data._____}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', _____);
    weatherIcon.setAttribute('___', _____);
    captionDesc.textContent = `${desc}`;
}