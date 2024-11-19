//script/scrolling-events/js
/*document.addEventListener("DOMContentLoaded", function () {
  const eventsContainer = document.getElementById("eventsContainer");

  // Array of events
  const events = [
      "Brand Building Workshop - February 8, 2024",
      "Innovation Expo - February 15, 2024",
      "Business Boost Seminar - March 5, 2024",
      "Entrepreneurial Summit - April 12, 2024",
      "Tech Connect Forum - May 3, 2024 - 4:30 PM",
      "Trade Showcase - June 20, 2024",
      "Leadership Luncheon - July 8, 2024",
      "Community Builder Awards - August 14, 2024",
      "Innovate & Elevate Conference - September 22, 2024",
      "Networking Mixer - October 7, 2024",
      "Business Excellence Awards - November 18, 2024",
      "Digital Marketing Workshop - December 5, 2024",
      "Holiday Gala - December 10, 2024",
    ];

    let isHovered = false; // Flag to track hover state
    let intervalId; // Variable to store the interval ID
    let scrollHeight = 0; // Variable to store the current scroll position
  
    // Function to create and append event elements to the container
    function createEventsList() {
      // Sort events in chronological order
      const sortedEvents = events.sort((a, b) => {
        const dateA = new Date(a.split(" - ")[1]);
        const dateB = new Date(b.split(" - ")[1]);
        return dateA - dateB;
      });
  
      // Duplicate the events to ensure continuous scrolling
      const duplicatedEvents = [...sortedEvents, ...sortedEvents];
  
      duplicatedEvents.forEach((event) => {
        // Create a container div for each event with a colored box
        const eventContainer = document.createElement("div");
        eventContainer.classList.add("event-container");
  
        // Create a clickable link for each event
        const eventLink = document.createElement("a");
        eventLink.textContent = event;
        eventLink.href = "./discover.html"; // Replace with your desired link
  
        // Append the link to the container div
        eventContainer.appendChild(eventLink);
  
        // Append the container div to the eventsContainer
        eventsContainer.appendChild(eventContainer);
      });
    }
  
    // Function to start automatic scrolling
    function startScrolling() {
      intervalId = setInterval(() => {
        if (!isHovered) {
          scrollHeight += 1;
          eventsContainer.scrollTop = scrollHeight;
  
          // Reset scroll position to the top when reaching the end
          if (scrollHeight >= eventsContainer.scrollHeight / 2) {
            scrollHeight = 0;
          }
        }
      }, 50); // Adjust the interval as needed
    }
  
    // Event listener for mouseenter
    eventsContainer.addEventListener("mouseenter", function () {
      isHovered = true;
      clearInterval(intervalId); // Pause scrolling
    });
  
    // Event listener for mouseleave
    eventsContainer.addEventListener("mouseleave", function () {
      isHovered = false;
      startScrolling(); // Resume scrolling
    });
  
    // Call the function to create the events list
    createEventsList();
  
    // Start scrolling initially
    startScrolling();
  }); */

//home-nav.js
const hamburgerElement = document.querySelector("#myBtn");
const navElement = document.querySelector(".menu-dirrectory");

hamburgerElement.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

//get-weather.js

//member-data.js

//banner-btn.js
document.addEventListener("DOMContentLoaded", function() {
  var currentDate = new Date();
  var dayOfWeek = currentDate.getDay();
  var currentHour = currentDate.getHours();

  var banner = document.getElementById("chamberBanner");

  if (dayOfWeek >= 1 && dayOfWeek <= 3 && currentHour < 19) {
    banner.style.display = "Flex";
  } else {
    banner.style.display = "none";
  }

  var closeBtn = document.getElementById("closeBannerBtn");
  closeBtn.addEventListener("click", function() {
    banner.style.display = "none";
  });
});

//calling-action-btn.js
// Get the div element by its id
const callingActionDiv = document.getElementById('calling-Action');
const topframe = document.getElementById('top-frame');
const middleframe = document.getElementById('middle-frame');
const bottomframe = document.getElementById('bottom-frame');


// Add a click event listener to the div
callingActionDiv.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './join.html';
});

// Add a click event listener to the div
topframe.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './discover.html';
});
// Add a click event listener to the div
middleframe.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './directory.html';
});
// Add a click event listener to the div
bottomframe.addEventListener('click', function() {
    // Code to execute when the div is clicked
    // For example, you can redirect the user to a specific page
    window.location.href = './join.html';
});