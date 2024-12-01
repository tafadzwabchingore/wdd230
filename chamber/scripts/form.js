// Set the current date and time in the hidden input field when the form loads  
document.addEventListener('DOMContentLoaded', function() {  
    const timestampInput = document.getElementById('timestamp');  
    const currentDateTime = new Date().toISOString(); // Get current date and time in ISO format  
    timestampInput.value = currentDateTime; // Set the value of the hidden input  
});  

// Optional: Handle form submission  
document.getElementById('myForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent default form submission for demo  
    const name = event.target.name.value;  
    const id = event.target.id.value;  
    const timestamp = event.target.timestamp.value;  

    // Here you'd typically send the data to a server.  
    console.log('Submitted Data:', { name, id, timestamp });  
});  