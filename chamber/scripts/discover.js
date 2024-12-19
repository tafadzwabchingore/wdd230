// Function to get the current date in milliseconds
function getCurrentDate() {
    return Date.now();
}

// Function to calculate the difference in days between two dates
function calculateDaysBetweenVisits(lastVisitDate) {
    const currentDate = getCurrentDate();
    const differenceInMilliseconds = currentDate - lastVisitDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return differenceInDays;
}

// Function to display the visit message
function displayVisitMessage() {
    const visitMessageElement = document.getElementById('visit-message');
    const lastVisitDate = localStorage.getItem('lastVisitDate');

    if (lastVisitDate === null) {
        // First visit
        visitMessageElement.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysBetweenVisits = calculateDaysBetweenVisits(parseInt(lastVisitDate));

        if (daysBetweenVisits < 1) {
            // Less than a day
            visitMessageElement.textContent = 'Back so soon! Awesome!';
        } else {
            // More than a day
            const daysText = daysBetweenVisits === 1 ? 'day' : 'days';
            visitMessageElement.textContent = `You last visited ${daysBetweenVisits} ${daysText} ago.`;
        }
    }

    // Update the last visit date
    localStorage.setItem('lastVisitDate', getCurrentDate());
}

// Call the function to display the visit message
displayVisitMessage();