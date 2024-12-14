const API_KEY = 'f604ee8e49e2f6240d6998fbd1f36678';
const currenttemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const lon = 49.75; 
const lat = 6.64;

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // this is for testing the call
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currenttemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}