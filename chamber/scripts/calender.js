document.addEventListener("DOMContentLoaded", () => {  
    const monthElement = document.getElementById("month");  
    const calendarElement = document.getElementById("calendar");  

    const monthNames = [  
        "January", "February", "March", "April", "May", "June",   
        "July", "August", "September", "October", "November", "December"  
    ];  

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];  

    function fillCalendar() {  
        const date = new Date(); // Get the current date  
        const year = date.getFullYear();  
        const month = date.getMonth(); // Current month  

        // Set month name and year  
        monthElement.textContent = `${monthNames[month]} ${year}`;  

        // Clear the calendar before populating  
        calendarElement.innerHTML = '';  

        // Add week days headers  
        weekDays.forEach(day => {  
            const dayHeader = document.createElement("div");  
            dayHeader.classList.add("day-header");  
            dayHeader.textContent = day;  
            calendarElement.appendChild(dayHeader);  
        });  

        // Get the first day of the month and the total days in the month  
        const firstDay = new Date(year, month, 1).getDay(); // Day of the week (0-6)  
        const totalDays = new Date(year, month + 1, 0).getDate(); // Total days in the month  

        // Create empty slots for the days before the first day  
        for (let i = 0; i < firstDay; i++) {  
            const emptyCell = document.createElement("div");  
            emptyCell.classList.add("empty");  
            calendarElement.appendChild(emptyCell);  
        }  

        // Create cells for each day of the month  
        for (let day = 1; day <= totalDays; day++) {  
            const dayCell = document.createElement("div");  
            dayCell.classList.add("day");  
            dayCell.textContent = day;  
            calendarElement.appendChild(dayCell);  
        }  
    }  

    fillCalendar(); // Call the function to fill the calendar  
});