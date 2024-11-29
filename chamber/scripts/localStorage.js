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