function setTimestamp() {
    var currentDate = new Date();
    var timestamp = currentDate.toISOString(); // Convert to ISO 8601 format
    document.getElementById("timestamp").value = timestamp;
    console.log("Timestamp set: " + timestamp); // Log the timestamp
  }
  
  // Call the setTimestamp function when the page loads
  window.onload = setTimestamp;

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

//local storage
document.addEventListener("DOMContentLoaded", function() {
  // Get the current date
  var currentDate = new Date();
  
  // Retrieve the last visit date from localStorage
  var lastVisitDate = localStorage.getItem("lastVisitDate");
  
  if (lastVisitDate === null) {
      // First visit
      localStorage.setItem("lastVisitDate", currentDate);
      document.getElementById("sidebar-content").innerText = "Welcome! Let us know if you have any questions.";
  } else {
      // Calculate the difference in days between the current and last visit
      var millisecondsPerDay = 1000 * 60 * 60 * 24;
      var differenceInTime = currentDate - new Date(lastVisitDate);
      var differenceInDays = Math.floor(differenceInTime / millisecondsPerDay);
      
      if (differenceInDays === 0) {
          // Less than a day
          document.getElementById("sidebar-content").innerText = "Back so soon! Awesome!";
      } else {
          // More than a day
          var message;
          if (differenceInDays === 1) {
              message = "You last visited 1 day ago.";
          } else {
              message = "You last visited " + differenceInDays + " days ago.";
          }
          document.getElementById("sidebar-content").innerText = message;
      }
      
      // Update the last visit date in localStorage
      localStorage.setItem("lastVisitDate", currentDate);
  }
});