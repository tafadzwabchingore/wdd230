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