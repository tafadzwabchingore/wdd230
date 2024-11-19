// script.js

document.addEventListener('DOMContentLoaded', function() {
  console.log("Welcome to the Chamber of Commerce!");
});


//darkmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 //getDates
 const copyYear = document.querySelector("#year");

try {
  const options = {
    year: "numeric",
  };
  copyYear.innerHTML = `${new Date().toLocaleDateString(
    "en-Us",
    options
  )}`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}

const date1 = document.querySelector("#date1");

try {
  date1.innerHTML = `<span class="highlight">${document.lastModified}</span>`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}

//hamburger
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
