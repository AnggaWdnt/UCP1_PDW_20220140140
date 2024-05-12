// script.js

// Function to display current time
function displayTime() {
    // Create a new Date object
    const now = new Date();
    
    // Format the time as desired (e.g., HH:MM:SS)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update the content of the HTML element with id="current-time" with the current time
    document.getElementById('current-time').innerText = timeString;
  }
  
  // Call the displayTime function initially to display the time immediately when the page loads
  displayTime();
  
  // Set an interval to update the time every second (1000 milliseconds)
  setInterval(displayTime, 1000);
  